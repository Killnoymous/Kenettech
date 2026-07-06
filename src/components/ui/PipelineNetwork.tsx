import React, { useState, useEffect, useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Line } from "@react-three/drei"
import * as THREE from "three"

// --- Types ---
interface Node {
  id: number
  position: [number, number, number]
  connections: number[] // connected node IDs
}

interface Pulse {
  id: number
  startId: number
  endId: number
  progress: number // 0 to 1
  speed: number
}

interface PipelineSceneProps {
  density: number
  nodeColor: string
}

// --- R3F Scene Component ---
const PipelineScene: React.FC<PipelineSceneProps> = ({ density, nodeColor }) => {
  const groupRef = useRef<THREE.Group>(null)
  const [pulses, setPulses] = useState<Pulse[]>([])
  const pulseIdCounter = useRef(0)

  // 1. Generate lattice nodes
  const nodes = useMemo(() => {
    const list: Node[] = []
    const count = density

    // Generate random nodes in a structured spherical volume
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const r = 1.2 + Math.random() * 1.8 // layered radius

      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)

      list.push({
        id: i,
        position: [x, y, z],
        connections: [],
      })
    }

    // Connect close neighbors
    const threshold = 1.6
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const p1 = list[i].position
        const p2 = list[j].position
        const dist = Math.hypot(p1[0] - p2[0], p1[1] - p2[1], p1[2] - p2[2])

        // Add connection if close enough (limit max connections per node to 3 for clean layout)
        if (dist < threshold && list[i].connections.length < 3 && list[j].connections.length < 3) {
          list[i].connections.push(list[j].id)
          list[j].connections.push(list[i].id)
        }
      }
    }

    return list
  }, [density])

  // Get lines points representation
  const lines = useMemo(() => {
    const segments: [ [number, number, number], [number, number, number] ][] = []
    const visited = new Set<string>()

    nodes.forEach((n) => {
      n.connections.forEach((cId) => {
        const key = [n.id, cId].sort().join("-")
        if (!visited.has(key)) {
          visited.add(key)
          const target = nodes.find((val) => val.id === cId)
          if (target) {
            segments.push([n.position, target.position])
          }
        }
      })
    })
    return segments
  }, [nodes])

  // Periodic pulse trigger
  useEffect(() => {
    const interval = setInterval(() => {
      // Find a node that has connections
      const nodesWithConnections = nodes.filter((n) => n.connections.length > 0)
      if (nodesWithConnections.length === 0) return

      const randomNode = nodesWithConnections[Math.floor(Math.random() * nodesWithConnections.length)]
      const targetId = randomNode.connections[Math.floor(Math.random() * randomNode.connections.length)]

      setPulses((prev) => [
        ...prev,
        {
          id: pulseIdCounter.current++,
          startId: randomNode.id,
          endId: targetId,
          progress: 0,
          speed: 0.8 + Math.random() * 0.6, // duration ~0.7s to 1.2s
        },
      ])
    }, 1500) // Trigger new pulse every 1.5s

    return () => clearInterval(interval)
  }, [nodes])

  // Animate rotation & pulses
  useFrame((_, delta) => {
    // 1. Slow Y rotation (60s per revolution => ~0.104 rad/s => delta * 0.1)
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08
    }

    // 2. Update pulse positions
    setPulses((prev) =>
      prev
        .map((p) => ({
          ...p,
          progress: p.progress + delta * p.speed,
        }))
        .filter((p) => p.progress < 1)
    )
  })

  return (
    <group ref={groupRef}>
      {/* 1. Render Lattice Nodes */}
      {nodes.map((n) => (
        <mesh key={n.id} position={n.position}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshBasicMaterial color={nodeColor} />
        </mesh>
      ))}

      {/* 2. Render Connection Lines */}
      {lines.map((pts, idx) => (
        <Line
          key={idx}
          points={pts}
          color="#22262B"
          lineWidth={1}
          transparent
          opacity={0.6}
        />
      ))}

      {/* 3. Render Floating Pulses */}
      {pulses.map((p) => {
        const start = nodes.find((n) => n.id === p.startId)?.position
        const end = nodes.find((n) => n.id === p.endId)?.position
        if (!start || !end) return null

        // Interpolate position
        const x = start[0] + (end[0] - start[0]) * p.progress
        const y = start[1] + (end[1] - start[1]) * p.progress
        const z = start[2] + (end[2] - start[2]) * p.progress

        return (
          <mesh key={p.id} position={[x, y, z]}>
            <sphereGeometry args={[0.09, 8, 8]} />
            <meshBasicMaterial color="#EDEEEA" />
          </mesh>
        )
      })}
    </group>
  )
}

// --- Main PipelineNetwork Component (with Fallback) ---
interface PipelineNetworkProps {
  scale?: number
  position?: [number, number, number]
  density?: number
  nodeColor?: string
}

export const PipelineNetwork: React.FC<PipelineNetworkProps> = ({
  scale = 1,
  position = [0, 0, 0],
  density = 40,
  nodeColor = "#C97A3D",
}) => {
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile device
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)")
    setIsMobile(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  if (isMobile) {
    // --- Mobile SVG Fallback ---
    return (
      <div
        className="w-full h-full flex items-center justify-center pointer-events-none opacity-40"
        style={{
          transform: `scale(${scale}) translate(${position[0] * 20}px, ${position[1] * 20}px)`,
          transition: "transform 0.5s ease-out",
        }}
      >
        <svg
          width="280"
          height="280"
          viewBox="0 0 100 100"
          className="stroke-[#22262B]"
          strokeWidth="0.5"
          fill="none"
        >
          {/* Static lattice lines */}
          <line x1="20" y1="30" x2="50" y2="20" />
          <line x1="50" y1="20" x2="80" y2="30" />
          <line x1="20" y1="30" x2="35" y2="60" />
          <line x1="50" y1="20" x2="65" y2="55" />
          <line x1="80" y1="30" x2="65" y2="55" />
          <line x1="35" y1="60" x2="65" y2="55" />
          <line x1="35" y1="60" x2="50" y2="85" />
          <line x1="65" y1="55" x2="50" y2="85" />

          {/* Glowing Static Nodes */}
          <circle cx="20" cy="30" r="1.5" fill={nodeColor} />
          <circle cx="50" cy="20" r="1.5" fill={nodeColor} />
          <circle cx="80" cy="30" r="1.5" fill={nodeColor} />
          <circle cx="35" cy="60" r="1.5" fill={nodeColor} />
          <circle cx="65" cy="55" r="1.5" fill={nodeColor} />
          <circle cx="50" cy="85" r="1.5" fill={nodeColor} />

          {/* Simple animated CSS pulse representing pipeline data flow */}
          <circle cx="20" cy="30" r="2" fill="#EDEEEA" className="animate-ping">
            <animate
              attributeName="cx"
              values="20;50;80"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="30;20;30"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    )
  }

  // --- Desktop 3D Canvas Scene ---
  return (
    <div
      className="w-full h-full pointer-events-none"
      style={{
        transform: `scale(${scale})`,
        transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <Canvas camera={{ position: [0, 0, 7], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <group position={position}>
          <PipelineScene density={density} nodeColor={nodeColor} />
        </group>
      </Canvas>
    </div>
  )
}
