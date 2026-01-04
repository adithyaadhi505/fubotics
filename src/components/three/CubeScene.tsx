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
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.z += delta * 0.15;
    }
    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.x += delta * 0.2;
      innerSphereRef.current.rotation.y += delta * 0.3;
      innerSphereRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <meshPhysicalMaterial
          roughness={0.1}
          metalness={0.9}
          clearcoat={1}
          clearcoatRoughness={0.2}
          color="#302620"
        />

        <Geometry>
          <Base>
            <primitive object={new RoundedBoxGeometry(2, 2, 2, 7, 0.2)} />
          </Base>

          <Subtraction>
            <sphereGeometry args={[1.25, 64, 64]} />
          </Subtraction>
        </Geometry>
      </mesh>

      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshPhysicalMaterial
          color="#d4c4b3"
          emissive="#d4c4b3"
          emissiveIntensity={0.8}
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>
    </>
  );
};

const Environment: React.FC = () => {
  return (
    <>
      <directionalLight position={[-5, 5, -5]} intensity={0.3} color="#d4c4b3" />

      <directionalLight position={[0, -5, 10]} intensity={0.4} color="#e8e3dc" />

      <ambientLight intensity={0.4} color="#483f37" />

      <pointLight
        position={[8, 3, 8]}
        intensity={0.3}
        color="#c0a598"
        distance={20}
      />

      <pointLight
        position={[-8, 3, -8]}
        intensity={0.3}
        color="#d4c4b3"
        distance={20}
      />

      <directionalLight position={[0, -10, 0]} intensity={0.2} color="#a8937f" />
    </>
  );
};

const Scene: React.FC = () => {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [4, 4, 4], fov: 50 }}
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
          intensity={0.4}
        />
        <Bloom
          kernelSize={KernelSize.HUGE}
          luminanceThreshold={0}
          luminanceSmoothing={0}
          intensity={0.3}
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
