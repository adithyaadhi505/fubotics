import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Geometry, Base, Subtraction } from '@react-three/csg';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Mesh } from 'three';
import { KernelSize } from 'postprocessing';

/**
 * CubeScene Component
 * 3D animated cube with CSG geometry and post-processing effects
 * Integrated into Solutions section for visual enhancement
 */

interface ShapeProps {}

const Shape: React.FC<ShapeProps> = () => {
  const meshRef = useRef<Mesh>(null);
  const innerSphereRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.z += delta * 0.2;
    }
    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.x += delta * 0.3;
      innerSphereRef.current.rotation.y += delta * 0.4;
      innerSphereRef.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <meshPhysicalMaterial
          roughness={0.05}
          metalness={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          color="#483f37"
        />

        <Geometry>
          <Base>
            <primitive object={new RoundedBoxGeometry(3, 3, 3, 7, 0.3)} />
          </Base>

          <Subtraction>
            <sphereGeometry args={[1.9, 64, 64]} />
          </Subtraction>
        </Geometry>
      </mesh>

      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshPhysicalMaterial
          color="#d4c4b3"
          emissive="#c0a598"
          emissiveIntensity={2.5}
          roughness={0.2}
          metalness={0.3}
        />
      </mesh>
    </>
  );
};

const Environment: React.FC = () => {
  return (
    <>
      <directionalLight position={[-5, 5, -5]} intensity={0.8} color="#d4c4b3" />

      <directionalLight position={[0, -5, 10]} intensity={1.2} color="#e8e3dc" />

      <ambientLight intensity={0.8} color="#483f37" />

      <pointLight
        position={[8, 3, 8]}
        intensity={0.9}
        color="#c0a598"
        distance={20}
      />

      <pointLight
        position={[-8, 3, -8]}
        intensity={0.9}
        color="#d4c4b3"
        distance={20}
      />

      <directionalLight position={[0, -10, 0]} intensity={0.6} color="#a8937f" />
    </>
  );
};

const Scene: React.FC = () => {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [5, 5, 5], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
    >
      <Environment />
      <Suspense fallback={null}>
        <Shape />
      </Suspense>
      <EffectComposer multisampling={0}>
        <Bloom
          kernelSize={3}
          luminanceThreshold={0}
          luminanceSmoothing={0.4}
          intensity={1.2}
        />
        <Bloom
          kernelSize={KernelSize.HUGE}
          luminanceThreshold={0}
          luminanceSmoothing={0}
          intensity={0.8}
        />
      </EffectComposer>
    </Canvas>
  );
};

interface CubeSceneProps {
  className?: string;
}

export const CubeScene: React.FC<CubeSceneProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-[400px] md:h-[500px] relative ${className}`}>
      <div className="absolute inset-0 bg-transparent">
        <Scene />
      </div>
    </div>
  );
};

export default CubeScene;
