import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { OrbitControls } from '@react-three/drei';
imprt

const App = () => {
  return <Canvas >
    <OrbitControls/>
    <ambientLight />
    <mesh>
      <cylinderGeometry args={[1,1,1,30,30,true]} />
      <meshStandardMaterial side={THREE} />
    </mesh>
  </Canvas>;
}

export default App
