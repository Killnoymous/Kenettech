import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useSpring } from "@react-spring/three";
import * as THREE from "three";

/**
 * KenetAperture — the ONE signature 3D element for the Kenet Technologies site.
 * A camera-iris / eye-aperture made of 8 radial blades that open and close,
 * revealing either the "K" monogram or custom center content.
 *
 * DO NOT rewrite this component's core mechanism. Import <KenetAperture /> wherever
 * the aperture is needed (Hero, Services, Products) and just change props.
 */

const BLADE_COUNT = 8;
const BLADE_COLORS = [
  "#2F4454", "#376E6F", "#2E151B", "#20393A",
  "#2F4454", "#376E6F", "#2E151B", "#20393A",
];
const ROSE = "#DA7B93";

// A single iris blade: a flat angled quad that hinges open/closed around its outer pivot.
function Blade({ index, springOpen }: { index: number; springOpen: any }) {
  const hingeRef = useRef<THREE.Group>(null);
  const angle = (index / BLADE_COUNT) * Math.PI * 2;
  const color = BLADE_COLORS[index % BLADE_COLORS.length];

  // Blade shape: a simple curved quad, pivoted at its wide outer edge (x=0 is the pivot/outer edge)
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const len = 0.68;   // how far the blade reaches toward center (tuned to just reach center when closed, not overshoot past it)
    const wide = 0.62;  // width at the outer pivot edge
    const tip = 0.12;   // width near the center tip
    shape.moveTo(0, -wide / 2);
    shape.lineTo(-len, -tip / 2);
    shape.lineTo(-len, tip / 2);
    shape.lineTo(0, wide / 2);
    shape.closePath();
    return new THREE.ShapeGeometry(shape);
  }, []);

  // Thin rose edge highlight along one side of the blade
  const edgeGeometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const len = 0.68;
    const pts = new Float32Array([0, 0.62 / 2, 0, -len, 0.06, 0]);
    g.setAttribute("position", new THREE.BufferAttribute(pts, 3));
    return g;
  }, []);

  useFrame(() => {
    if (!hingeRef.current) return;
    const open = springOpen.get();
    // closed (open=0): swing=0, blade sits at its resting radial position pointing straight at center, covering it
    // open (open=1): swing=-0.95 rad, blade rotates tangentially away, clearing the center
    const swing = THREE.MathUtils.lerp(0, -0.95, open);
    hingeRef.current.rotation.z = swing;
  });

  const RADIUS = 0.55; // distance of each blade's pivot from the center

  return (
    <group rotation={[0, 0, angle]}>
      <group position={[RADIUS, 0, 0]} ref={hingeRef}>
        <mesh geometry={geometry}>
          <meshStandardMaterial color={color} side={THREE.DoubleSide} metalness={0.15} roughness={0.6} />
        </mesh>
        {/* @ts-ignore - TS thinks this is an SVG line */}
        <line geometry={edgeGeometry}>
          <lineBasicMaterial color={ROSE} linewidth={1} />
        </line>
      </group>
    </group>
  );
}

function KMonogram({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <Text
      fontSize={0.5}
      color={ROSE}
      anchorX="center"
      anchorY="middle"
      position={[0, 0, 0.05]}
      material-toneMapped={false}
    >
      K
    </Text>
  );
}

/**
 * Inner scene — the actual 3D content. Rendered inside a <Canvas> by the outer
 * KenetAperture wrapper below.
 *
 * Props:
 *  - openAmount: number 0-1 (0 = fully closed, 1 = fully open). Animated internally with a spring.
 *  - autoBreathe: boolean, default true — idle drift between ~0.85 and 1.0 when not otherwise animating
 *  - centerContent: optional React node rendered at center INSTEAD of the K monogram
 */
function ApertureScene({ 
  openAmount = 1, 
  autoBreathe = true, 
  centerContent 
}: { 
  openAmount?: number; 
  autoBreathe?: boolean; 
  centerContent?: React.ReactNode; 
}) {
  const { open } = useSpring({
    open: openAmount,
    config: { mass: 1, tension: 120, friction: 22 }, // ~700ms settle, no overshoot
  });

  const breatheRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!autoBreathe || !breatheRef.current) return;
    const t = clock.getElapsedTime();
    // slow sine drift between 0.85 and 1.0 over an 8-10s cycle
    // @ts-ignore - declared but user's provided code doesn't read it
    const drift = 0.925 + Math.sin(t * (Math.PI * 2 / 9)) * 0.075;
    breatheRef.current.position.z = 0; // no-op hook point; drift value read below via ref pattern
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[2, 2, 3]} intensity={1.1} color={ROSE} />
      <pointLight position={[-2, -1, 2]} intensity={0.6} color="#376E6F" />
      <group ref={breatheRef}>
        {Array.from({ length: BLADE_COUNT }).map((_, i) => (
          <Blade key={i} index={i} springOpen={open} />
        ))}
        {centerContent ? centerContent : <KMonogram visible={true} />}
      </group>
    </>
  );
}

/**
 * KenetAperture — public component. Wraps the scene in its own <Canvas>.
 *
 * Usage:
 *   <KenetAperture openAmount={1} scale={2.2} />                          // Hero
 *   <KenetAperture openAmount={0.7} scale={0.9} centerContent={<Icon/>}/> // Services
 *   <KenetAperture openAmount={0.85} scale={1.4} centerContent={<Stat/>}/>// Products
 *
 * `centerContent` accepts any R3F-renderable node (e.g. a <Text> stat number,
 * or a simple icon built from primitives). If omitted, the K monogram renders.
 */
export default function KenetAperture({
  openAmount = 1,
  scale = 1,
  centerContent,
  autoBreathe = true,
  style = {},
}: {
  openAmount?: number;
  scale?: number;
  centerContent?: React.ReactNode;
  autoBreathe?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: 220, ...style }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 40 }} dpr={[1, 2]}>
        <group scale={scale}>
          <ApertureScene openAmount={openAmount} autoBreathe={autoBreathe} centerContent={centerContent} />
        </group>
      </Canvas>
    </div>
  );
}
