import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Rocket({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  const flameRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.2 + position[1];
      groupRef.current.rotation.z = Math.sin(t * 0.5) * 0.04;
    }
    if (flameRef.current) {
      flameRef.current.scale.y = 0.8 + Math.sin(t * 12) * 0.3;
      flameRef.current.scale.x = 0.9 + Math.sin(t * 15) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={[0, 0, 0.15]}>
      {/* Nose cone */}
      <mesh position={[0, 1.6, 0]}>
        <coneGeometry args={[0.28, 0.6, 16]} />
        <meshStandardMaterial color="#e11d48" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.28, 0.3, 1.6, 16]} />
        <meshStandardMaterial color="#f1f5f9" roughness={0.2} metalness={0.4} />
      </mesh>

      {/* Red stripe */}
      <mesh position={[0, 0.8, 0.01]}>
        <cylinderGeometry args={[0.29, 0.31, 0.15, 16]} />
        <meshStandardMaterial color="#e11d48" roughness={0.3} metalness={0.5} />
      </mesh>

      {/* Window */}
      <mesh position={[0, 1.1, 0.26]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#38bdf8" emissive="#1d4ed8" emissiveIntensity={0.5} roughness={0.1} metalness={0.8} />
      </mesh>
      <mesh position={[0, 1.1, 0.22]}>
        <ringGeometry args={[0.1, 0.13, 16]} />
        <meshStandardMaterial color="#94a3b8" side={THREE.DoubleSide} />
      </mesh>

      {/* Engine base */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.3, 0.25, 0.3, 16]} />
        <meshStandardMaterial color="#64748b" roughness={0.4} metalness={0.7} />
      </mesh>

      {/* Nozzle */}
      <mesh position={[0, -0.35, 0]}>
        <cylinderGeometry args={[0.18, 0.22, 0.2, 16]} />
        <meshStandardMaterial color="#475569" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Fins */}
      {[0, (2 * Math.PI) / 3, (4 * Math.PI) / 3].map((angle, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(angle) * 0.3,
            0.05,
            Math.cos(angle) * 0.3,
          ]}
          rotation={[0, -angle, 0]}
        >
          <boxGeometry args={[0.02, 0.5, 0.35]} />
          <meshStandardMaterial color="#e11d48" roughness={0.3} metalness={0.5} />
        </mesh>
      ))}

      {/* Flame */}
      <group position={[0, -0.5, 0]}>
        <mesh ref={flameRef} position={[0, -0.3, 0]}>
          <coneGeometry args={[0.15, 0.7, 12]} />
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#f97316"
            emissiveIntensity={2}
            transparent
            opacity={0.85}
          />
        </mesh>
        <mesh position={[0, -0.25, 0]} scale={[0.6, 0.8, 0.6]}>
          <coneGeometry args={[0.12, 0.5, 12]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#fbbf24"
            emissiveIntensity={3}
            transparent
            opacity={0.7}
          />
        </mesh>
      </group>

      {/* Exhaust particles */}
      {[...Array(5)].map((_, i) => (
        <mesh
          key={`p-${i}`}
          position={[
            (Math.random() - 0.5) * 0.2,
            -0.9 - Math.random() * 0.4,
            (Math.random() - 0.5) * 0.2,
          ]}
        >
          <sphereGeometry args={[0.02 + Math.random() * 0.03, 6, 6]} />
          <meshStandardMaterial
            color="#fb923c"
            emissive="#f97316"
            emissiveIntensity={1.5}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}
