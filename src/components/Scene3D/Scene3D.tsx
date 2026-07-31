import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import SpaceBackground from './Ocean';
import Rocket from './Ship';
import Astronaut from './Character';

function SmallPlanet({ position, color, size }: { position: [number, number, number]; color: string; size: number }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial color={color} roughness={0.7} />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 2, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#050510']} />
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 8, 5]} intensity={1.2} color="#ffeedd" />
          <pointLight position={[-4, 3, -2]} intensity={0.8} color="#8b5cf6" />
          <pointLight position={[3, -2, 4]} intensity={0.4} color="#ec4899" />

          <fog attach="fog" args={['#050510', 12, 35]} />

          <Stars
            radius={60}
            depth={60}
            count={3000}
            factor={4}
            saturation={0.8}
            fade
            speed={0.3}
          />

          <SpaceBackground />

          <Float speed={0.6} rotationIntensity={0.1} floatIntensity={0.5}>
            <Rocket position={[-1, 0, 0]} />
          </Float>

          <Float speed={0.4} rotationIntensity={0} floatIntensity={0.3}>
            <Astronaut position={[1.2, 0.3, 0.5]} />
          </Float>

          {/* Distant planets */}
          <Float speed={0.2} floatIntensity={0.1}>
            <SmallPlanet position={[-6, 3, -10]} color="#e11d48" size={1.2} />
          </Float>
          <Float speed={0.15} floatIntensity={0.15}>
            <SmallPlanet position={[7, -2, -12]} color="#7c3aed" size={0.8} />
          </Float>
          <Float speed={0.1} floatIntensity={0.08}>
            <SmallPlanet position={[4, 4, -15]} color="#0891b2" size={0.5} />
          </Float>

          {/* Ring around distant planet */}
          <Float speed={0.2} floatIntensity={0.1}>
            <group position={[-6, 3, -10]} rotation={[0.5, 0.3, 0]}>
              <mesh>
                <ringGeometry args={[1.6, 2.0, 32]} />
                <meshStandardMaterial color="#f9a8d4" transparent opacity={0.3} side={2} />
              </mesh>
            </group>
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
