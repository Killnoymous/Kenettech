import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';
import { Image } from '@react-three/drei';
import * as THREE from 'three';

const IMAGES = [
  "/images/cube/img1.jpg",
  "/images/cube/img2.jpg",
  "/images/cube/img3.jpg",
  "/images/cube/middle_1.png",
  "/images/cube/middle_2.png",
  "/images/cube/img1.jpg",
  "/images/cube/img7.jpg",
  "/images/cube/img8.jpg",
  "/images/cube/img9.jpg",
];

export function ImageCube() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Cube configuration
  const cubeSize = 3; 
  const gap = 0.05; 
  const gridSize = 3; // 3x3 grid
  const tileSize = (cubeSize - (gridSize - 1) * gap) / gridSize;
  const halfCube = cubeSize / 2;

  // We have 6 faces. We will map 9 tiles per face = 54 tiles.
  // Faces defined by their rotation and translation from the center
  const faces = [
    { pos: [0, 0, halfCube], rot: [0, 0, 0] }, // Front
    { pos: [0, 0, -halfCube], rot: [0, Math.PI, 0] }, // Back
    { pos: [-halfCube, 0, 0], rot: [0, -Math.PI / 2, 0] }, // Left
    { pos: [halfCube, 0, 0], rot: [0, Math.PI / 2, 0] }, // Right
    { pos: [0, halfCube, 0], rot: [-Math.PI / 2, 0, 0] }, // Top
    { pos: [0, -halfCube, 0], rot: [Math.PI / 2, 0, 0] }, // Bottom
  ];

  // Pre-calculate positions for the 3x3 grid on a local 2D plane (X, Y)
  const gridPositions: [number, number, number][] = [];
  const offset = (cubeSize - tileSize) / 2;
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const x = -offset + col * (tileSize + gap);
      const y = offset - row * (tileSize + gap);
      gridPositions.push([x, y, 0]);
    }
  }

  // Entry Animation
  useEffect(() => {
    if (groupRef.current) {
      // Start tiny and pushed back
      groupRef.current.scale.set(0.01, 0.01, 0.01);
      groupRef.current.position.set(4, -4, -10);
      groupRef.current.rotation.set(Math.PI, Math.PI, 0);

      // Spring to full size and position from backwards to forwards
      gsap.to(groupRef.current.scale, {
        x: 1, y: 1, z: 1,
        duration: 2.5,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.2
      });

      gsap.to(groupRef.current.position, {
        x: 0, y: 0, z: 0,
        duration: 2,
        ease: 'power3.out',
        delay: 0.2
      });
    }
  }, []);

  // Animation logic: Slow rotation + mouse interaction
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Base slow rotation
      const targetRotationX = time * 0.1;
      const targetRotationY = time * 0.15;
      
      // Add slight mouse follow effect
      const mouseX = (state.pointer.x * Math.PI) / 4;
      const mouseY = (state.pointer.y * Math.PI) / 4;

      // Lerp for smooth movement
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX + mouseY, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY + mouseX, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      {faces.map((face, faceIdx) => (
        <group 
          key={faceIdx} 
          position={face.pos as [number, number, number]} 
          rotation={face.rot as [number, number, number]}
        >
          {gridPositions.map((pos, i) => {
            // Assign a random or sequential image from our array
            const imgIndex = (faceIdx * 9 + i) % IMAGES.length;
            return (
              <Image 
                key={i}
                position={pos}
                url={IMAGES[imgIndex]}
                scale={[tileSize, tileSize]} // Note: scale takes an array [width, height]
                transparent
                opacity={0.9}
              />
            );
          })}
        </group>
      ))}
    </group>
  );
}
