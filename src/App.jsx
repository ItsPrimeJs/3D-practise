import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { OrbitControls } from '@react-three/drei';
import Cyl from './Cyl';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

const App = () => {
  return (
    <Canvas camera={{ fov: 35, position: [2, 2, 5] }}>
      <OrbitControls />
      {/* Increase the ambient light intensity */}
      <ambientLight intensity={1} />
      
      {/* Add a directional light for more contrast */}
      <directionalLight position={[5, 5, 5]} intensity={1.5} />

      <Cyl />
      
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={2.0}  // Slightly higher bloom intensity
          luminanceThreshold={0.1}  // Lower threshold to include darker elements
          luminanceSmoothing={0.9}  // Smoother transition for bloom
        />
      </EffectComposer>
    </Canvas>
  )
}

export default App
