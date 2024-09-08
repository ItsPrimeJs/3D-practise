import React, { useRef } from "react";
import * as THREE from 'three'
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
const Cyl = () => {
  let tex = useTexture(
    "https://images.unsplash.com/photo-1724589613596-e269be5c0849?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  const cyl = useRef(null)

  useFrame((state, delta) => {
    cyl.current.rotation.y += delta;
  });
  return (
    <group rotation={[.05, 1, .6]}>
      <mesh ref={cyl} >
        <cylinderGeometry args={[1, 1, 1, 100, 100, true]} />
        <meshStandardMaterial map={tex} side={THREE.DoubleSide} />
      </mesh>
      </group>
  );
};

export default Cyl;
