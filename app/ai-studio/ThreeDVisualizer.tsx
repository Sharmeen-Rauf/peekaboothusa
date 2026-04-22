"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, Float, Box, Cylinder, Ring, Torus } from "@react-three/drei";
import * as THREE from "three";

// --- Types ---
type VisualizerProps = {
  booth: string;
  backdrop: { name: string; hex?: string };
  lightingHex: string;
};

// --- Models (Stylized Primitives) ---
function MirrorBooth({ color }: { color: string }) {
  return (
    <group position={[0, 0, 0]}>
      {/* Base */}
      <Box args={[1.2, 0.1, 0.8]} position={[0, 0.05, 0]}>
        <meshStandardMaterial color="#111" metalness={0.8} roughness={0.2} />
      </Box>
      {/* Main Body */}
      <Box args={[1, 2.5, 0.5]} position={[0, 1.3, 0]}>
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
      </Box>
      {/* Mirror Screen */}
      <Box args={[0.9, 2.3, 0.05]} position={[0, 1.3, 0.26]}>
        <meshPhysicalMaterial color="#ffffff" metalness={1} roughness={0} transmission={0.5} thickness={0.5} />
      </Box>
      {/* LED Ring Glow */}
      <Torus args={[0.3, 0.02, 16, 32]} position={[0, 1.8, 0.29]} rotation={[0, 0, 0]}>
        <meshBasicMaterial color={color} toneMapped={false} />
      </Torus>
      {/* Ambient glow emitting from the ring */}
      <pointLight position={[0, 1.8, 0.5]} color={color} intensity={2} distance={3} />
    </group>
  );
}

function ThreeSixtyBooth({ color }: { color: string }) {
  const armRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (armRef.current) {
      armRef.current.rotation.y = state.clock.elapsedTime * 2;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Platform */}
      <Cylinder args={[1.5, 1.5, 0.2, 64]} position={[0, 0.1, 0]}>
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
      </Cylinder>
      {/* Glowing Edge */}
      <Torus args={[1.5, 0.02, 16, 64]} position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color={color} toneMapped={false} />
      </Torus>
      
      {/* Spinning Arm */}
      <group ref={armRef}>
        <Cylinder args={[0.02, 0.02, 2, 16]} position={[1.4, 1.1, 0]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#333" metalness={0.8} />
        </Cylinder>
        {/* Camera Phone at end of arm */}
        <Box args={[0.1, 0.2, 0.05]} position={[1.4, 2, 0]} rotation={[0, -Math.PI/2, 0]}>
           <meshStandardMaterial color="#000" />
        </Box>
        <pointLight position={[1.4, 2, 0]} color={color} intensity={1.5} distance={2} />
      </group>
    </group>
  );
}

function StandardBooth({ color }: { color: string }) {
  return (
    <group position={[0, 0, 0]}>
      {/* Stand */}
      <Cylinder args={[0.1, 0.1, 1.8, 16]} position={[0, 0.9, 0]}>
        <meshStandardMaterial color="#222" metalness={0.8} />
      </Cylinder>
      {/* Head Box */}
      <Box args={[0.6, 0.8, 0.4]} position={[0, 1.8, 0]}>
        <meshStandardMaterial color="#050505" metalness={0.9} roughness={0.1} />
      </Box>
      {/* Lens */}
      <Cylinder args={[0.15, 0.15, 0.1, 32]} position={[0, 1.8, 0.2]} rotation={[Math.PI/2, 0, 0]}>
        <meshStandardMaterial color="#000" metalness={1} roughness={0} />
      </Cylinder>
      {/* Ring Flash */}
      <Torus args={[0.2, 0.015, 16, 64]} position={[0, 1.8, 0.25]} rotation={[0, 0, 0]}>
        <meshBasicMaterial color={color} toneMapped={false} />
      </Torus>
      <pointLight position={[0, 1.8, 0.4]} color={color} intensity={2} distance={3} />
    </group>
  );
}

function Backdrop({ name, color }: { name: string, color: string }) {
  // Translate name to some physical properties
  const isMetallic = name.includes("Sequin") || name.includes("Grid");
  const isDark = name.includes("Black");
  
  return (
    <group position={[0, 0, -2.5]}>
      {/* Main Wall */}
      <Box args={[6, 4, 0.1]} position={[0, 2, 0]}>
        <meshStandardMaterial 
          color={isDark ? "#111" : "#e5e5e5"} 
          metalness={isMetallic ? 0.8 : 0.1} 
          roughness={isMetallic ? 0.3 : 0.9} 
        />
      </Box>
      {/* Backdrop Frame */}
      <Box args={[6.2, 4.2, 0.12]} position={[0, 2.1, -0.05]}>
        <meshStandardMaterial color="#000" metalness={0.9} />
      </Box>
    </group>
  );
}


// --- Main Visualizer Component ---
export default function ThreeDVisualizer({ booth, backdrop, lightingHex }: VisualizerProps) {
  return (
    <Canvas shadows camera={{ position: [0, 2.5, 6], fov: 45 }}>
      <color attach="background" args={["#050505"]} />
      
      {/* Global Illumination */}
      <ambientLight intensity={0.2} />
      <Environment preset="city" environmentIntensity={0.2} />

      {/* Dynamic Lighting matched to user selection */}
      <spotLight 
        position={[0, 5, 4]} 
        angle={0.5} 
        penumbra={1} 
        intensity={2} 
        color={lightingHex} 
        castShadow 
      />
      
      <spotLight 
        position={[-3, 4, -2]} 
        angle={0.6} 
        penumbra={0.8} 
        intensity={1} 
        color={lightingHex} 
      />

      {/* The 3D Scene */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <group position={[0, -1, 0]}>
          
          {/* Render correct booth based on selection */}
          {booth.includes("360") ? (
            <ThreeSixtyBooth color={lightingHex} />
          ) : booth.includes("Mirror") ? (
            <MirrorBooth color={lightingHex} />
          ) : (
            <StandardBooth color={lightingHex} />
          )}

          {/* Backdrop */}
          <Backdrop name={backdrop.name} color={lightingHex} />

        </group>
      </Float>

      {/* Floor & Shadows */}
      <ContactShadows position={[0, -1, 0]} opacity={0.5} scale={10} blur={2} far={4} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.01, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Camera Controls */}
      <OrbitControls 
        makeDefault 
        minPolarAngle={Math.PI / 4} 
        maxPolarAngle={Math.PI / 2.1} 
        minAzimuthAngle={-Math.PI / 3}
        maxAzimuthAngle={Math.PI / 3}
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}
