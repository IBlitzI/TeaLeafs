'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import * as THREE from 'three';
import resim from '../public/images/leaf-images.png'; // Resmi import et

const FallingLeaf = ({ initialPosition }: { initialPosition: [number, number, number] }) => {
  const leafRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, resim.src); // Resmin yolunu kullan

  const rotationSpeed = useMemo(() => ({
    x: Math.random() * 0.02 - 0.01,
    y: Math.random() * 0.02 - 0.01,
    z: Math.random() * 0.02 - 0.01
  }), []);

  const velocity = useMemo(() => ({
    y: Math.random() * 0.005 + 0.002,
    x: Math.random() * 0.01 - 0.005,
    z: Math.random() * 0.01 - 0.005
  }), []);

  useFrame(() => {
    if (leafRef.current) {
      leafRef.current.rotation.x += rotationSpeed.x;
      leafRef.current.rotation.y += rotationSpeed.y;
      leafRef.current.rotation.z += rotationSpeed.z;
      
      leafRef.current.position.y -= velocity.y;
      leafRef.current.position.x += velocity.x;
      leafRef.current.position.z += velocity.z;

      if (leafRef.current.position.y < -3) {
        leafRef.current.position.y = 3;
        leafRef.current.position.x = Math.random() * 6 - 3;
        leafRef.current.position.z = Math.random() * 6 - 3;
      }
    }
  });

  return (
    <mesh ref={leafRef} position={initialPosition} scale={[0.5, 0.5, 0.5]}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial 
        map={texture} // TextureLoader'dan gelen dokuyu kullan
        transparent
        alphaTest={0.5}
        side={THREE.DoubleSide}
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  );
};

const TeaCup = () => {
  const cupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (cupRef.current) {
      cupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={cupRef}>
      {/* Cup body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.6, 1.5, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.5} />
      </mesh>
      {/* Cup inside */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.75, 0.55, 1.3, 32]} />
        <meshStandardMaterial color="#d2b48c" />
      </mesh>
      {/* Cup handle */}
      <mesh position={[0.9, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.2, 0.05, 16, 32]} />
        <meshStandardMaterial color="#f0f0f0" metalness={0.1} roughness={0.5} />
      </mesh>
      {/* Saucer (tabak) */}
      <mesh position={[0, -0.9, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 0.2, 32]} />
        <meshStandardMaterial color="#f0f0f0" metalness={0.1} roughness={0.5} />
      </mesh>
      {/* Steam */}
      <Steam />
    </group>
  );
};

const Steam = () => {
  const steamRef = useRef<THREE.Group>(null);
  const particles = useMemo(() => {
    return new Array(20).fill(null).map((_, i) => ({
      position: [
        Math.sin(i * 0.2) * 0.3,
        1.5 + i * 0.1,
        Math.cos(i * 0.2) * 0.3
      ],
      scale: 0.1 + Math.random() * 0.2
    }));
  }, []);

  useFrame((state) => {
    if (steamRef.current) {
      particles.forEach((particle, i) => {
        const mesh = steamRef.current?.children[i] as THREE.Mesh;
        if (mesh) {
          mesh.position.y = particle.position[1] + Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.2;
          mesh.scale.setScalar(particle.scale * (1 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.3));
        }
      });
    }
  });

  return (
    <group ref={steamRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position as [number, number, number]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
};

const Scene = () => {
  const leaves = useMemo(() => {
    return Array.from({ length: 10 }, () => ({
      position: [
        Math.random() * 6 - 3,
        Math.random() * 6 + 3,
        Math.random() * 6 - 3
      ] as [number, number, number]
    }));
  }, []);

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight
        position={[-10, 10, -10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <TeaCup />
      <Suspense fallback={null}>
        {leaves.map((leaf, i) => (
          <FallingLeaf key={i} initialPosition={leaf.position} />
        ))}
      </Suspense>
    </>
  );
};

export default function ThreeScene() {
  return (
    <div className="h-60 w-full mx-auto">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}