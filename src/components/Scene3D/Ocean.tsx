import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const nebulaVertex = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const nebulaFragment = `
  uniform float uTime;
  varying vec2 vUv;

  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  void main() {
    vec2 uv = vUv;
    float n = noise(uv * 4.0 + uTime * 0.05);
    float n2 = noise(uv * 8.0 - uTime * 0.03);

    vec3 purple = vec3(0.15, 0.02, 0.25);
    vec3 blue = vec3(0.02, 0.05, 0.2);
    vec3 pink = vec3(0.2, 0.02, 0.15);

    vec3 color = mix(purple, blue, n);
    color = mix(color, pink, n2 * 0.5);
    float alpha = smoothstep(0.3, 0.7, n) * 0.15;

    gl_FragColor = vec4(color, alpha);
  }
`;

export default function SpaceBackground() {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({ uTime: { value: 0 } }),
    []
  );

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -15]}>
      <planeGeometry args={[80, 60]} />
      <shaderMaterial
        vertexShader={nebulaVertex}
        fragmentShader={nebulaFragment}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}
