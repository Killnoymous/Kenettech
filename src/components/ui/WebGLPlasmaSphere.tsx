import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vPosition;

  // 3D Simplex Noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  
  float snoise(vec3 v) {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0);
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute( permute( permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
  }

  void main() {
    float dist = length(vPosition);
    if (dist > 1.0) discard; // Cut into a perfect circle

    // Z-axis movement for 3D volume effect
    vec3 noisePos1 = vec3(vPosition.x * 2.5, vPosition.y * 2.5, uTime * 0.15);
    vec3 noisePos2 = vec3(vPosition.x * 4.0, vPosition.y * 4.0, uTime * 0.25);
    vec3 noisePos3 = vec3(vPosition.x * 6.0, vPosition.y * 6.0, uTime * 0.4);
    
    // Low frequency cloudy noise
    float n1 = snoise(noisePos1);
    float n2 = snoise(noisePos2);
    float clouds = smoothstep(-0.2, 0.8, (n1 + n2 * 0.5));
    
    // High frequency lightning noise
    float n3 = snoise(noisePos3);
    // Create sharp, branching "lightning" by taking the absolute value and raising it to a high power
    float lightning = pow(1.0 - abs(n3), 6.0) * 1.5; 
    
    // Core glow (brightest in the center)
    float core = smoothstep(0.4, 0.0, dist);
    
    // Outer Rim (thick glowing pink edge)
    float rim = smoothstep(0.7, 1.0, dist);

    // Color Palette
    vec3 bgColor = vec3(0.04, 0.0, 0.08); // Dark purple void
    vec3 cloudColor = vec3(0.92, 0.28, 0.6); // Deep pink clouds
    vec3 lightningColor = vec3(0.65, 0.4, 1.0); // Electric purple/blue
    vec3 rimColor = vec3(0.9, 0.3, 0.6); // Outer glow
    vec3 coreColor = vec3(1.0, 0.9, 0.95); // White hot core
    
    // Composition
    vec3 color = mix(bgColor, cloudColor, clouds);
    color += lightningColor * lightning;
    color += coreColor * core * 1.5;
    color += rimColor * pow(rim, 2.0) * 1.2;
    
    // Make the lightning pop more near the edges
    color += lightningColor * lightning * smoothstep(0.5, 1.0, dist) * 2.0;

    // Calculate transparency (fade out smoothly at the absolute edge)
    float alpha = smoothstep(1.0, 0.98, dist);

    gl_FragColor = vec4(color, alpha);
  }
`;

const PlasmaMaterial = () => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <shaderMaterial
      ref={materialRef}
      transparent={true}
      uniforms={{
        uTime: { value: 0 }
      }}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
    />
  );
};

export function WebGLPlasmaSphere() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 2.5], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
      dpr={[1, 2]} // High DPI support
    >
      <mesh>
        <planeGeometry args={[2.5, 2.5]} />
        <PlasmaMaterial />
      </mesh>
    </Canvas>
  );
}
