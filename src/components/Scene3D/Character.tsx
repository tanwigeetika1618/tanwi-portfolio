import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Astronaut({
  position = [0, 0, 0],
  isWaving = true,
}: {
  position?: [number, number, number];
  isWaving?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Mesh>(null);
  const rightLegRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.15 + position[1];
      groupRef.current.rotation.z = Math.sin(t * 0.3) * 0.05;
      if (hovered) {
        groupRef.current.rotation.y = Math.sin(t * 2) * 0.3;
      }
    }
    if (rightArmRef.current && isWaving) {
      rightArmRef.current.rotation.z = Math.sin(t * 3) * 0.4 + 2.5;
    }
    if (leftLegRef.current && rightLegRef.current) {
      const swing = Math.sin(t * 0.8) * 0.15;
      leftLegRef.current.rotation.x = swing;
      rightLegRef.current.rotation.x = -swing;
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Helmet */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.27, 16, 16]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.2} metalness={0.3} />
      </mesh>

      {/* Visor */}
      <mesh position={[0, 1.5, 0.15]}>
        <sphereGeometry args={[0.22, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
        <meshStandardMaterial
          color="#1e3a5f"
          emissive="#3b82f6"
          emissiveIntensity={0.3}
          roughness={0.05}
          metalness={0.9}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Visor reflection */}
      <mesh position={[0.06, 1.55, 0.23]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>

      {/* Suit - Torso */}
      <mesh position={[0, 1.05, 0]}>
        <boxGeometry args={[0.4, 0.55, 0.28]} />
        <meshStandardMaterial color="#f1f5f9" roughness={0.4} metalness={0.2} />
      </mesh>

      {/* Chest panel */}
      <mesh position={[0, 1.1, 0.15]}>
        <boxGeometry args={[0.2, 0.18, 0.02]} />
        <meshStandardMaterial color="#94a3b8" roughness={0.3} metalness={0.5} />
      </mesh>
      {/* Status lights on chest */}
      <mesh position={[-0.05, 1.14, 0.17]}>
        <sphereGeometry args={[0.015, 6, 6]} />
        <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={2} />
      </mesh>
      <mesh position={[0.05, 1.14, 0.17]}>
        <sphereGeometry args={[0.015, 6, 6]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={2} />
      </mesh>

      {/* Left arm */}
      <group position={[-0.28, 1.2, 0]}>
        <mesh position={[0, -0.15, 0]}>
          <boxGeometry args={[0.12, 0.35, 0.12]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.4} />
        </mesh>
        {/* Glove */}
        <mesh position={[0, -0.36, 0]}>
          <sphereGeometry args={[0.07, 8, 8]} />
          <meshStandardMaterial color="#94a3b8" roughness={0.5} />
        </mesh>
      </group>

      {/* Right arm (waving) */}
      <group ref={rightArmRef} position={[0.28, 1.2, 0]}>
        <mesh position={[0, -0.15, 0]}>
          <boxGeometry args={[0.12, 0.35, 0.12]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.4} />
        </mesh>
        <mesh position={[0, -0.36, 0]}>
          <sphereGeometry args={[0.07, 8, 8]} />
          <meshStandardMaterial color="#94a3b8" roughness={0.5} />
        </mesh>
      </group>

      {/* Backpack / life support */}
      <mesh position={[0, 1.05, -0.2]}>
        <boxGeometry args={[0.3, 0.4, 0.12]} />
        <meshStandardMaterial color="#cbd5e1" roughness={0.4} metalness={0.3} />
      </mesh>

      {/* Left leg */}
      <mesh ref={leftLegRef} position={[-0.1, 0.5, 0]}>
        <boxGeometry args={[0.14, 0.45, 0.14]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.4} />
      </mesh>

      {/* Right leg */}
      <mesh ref={rightLegRef} position={[0.1, 0.5, 0]}>
        <boxGeometry args={[0.14, 0.45, 0.14]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.4} />
      </mesh>

      {/* Boots */}
      <mesh position={[-0.1, 0.24, 0.02]}>
        <boxGeometry args={[0.16, 0.1, 0.2]} />
        <meshStandardMaterial color="#64748b" roughness={0.5} metalness={0.4} />
      </mesh>
      <mesh position={[0.1, 0.24, 0.02]}>
        <boxGeometry args={[0.16, 0.1, 0.2]} />
        <meshStandardMaterial color="#64748b" roughness={0.5} metalness={0.4} />
      </mesh>
    </group>
  );
}
