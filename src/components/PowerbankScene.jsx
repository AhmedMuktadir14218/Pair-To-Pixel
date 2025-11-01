import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';

// FIX: Change to a NAMED IMPORT { Model } and rename it to PowerbankModel
import { Model as PowerbankModel } from './PowerbankModel'; 

function PowerbankScene() {
  return (
    // Set a container for your 3D canvas and give it a size
    // Note: The background is set to a light gray here, you may want to adjust this 
    // to match the dark theme of your App.jsx
    <div style={{ height: '500px', width: '100%', background: '#1E1E1E' }}> 
      <Canvas 
        // Configure the camera for a good starting view
        camera={{ position: [2, 0, 5], fov: 40 }}
        dpr={[1, 2]} 
      >
        {/* Suspense is required for asynchronous loading of the .glb file */}
        <Suspense fallback={<Html center style={{ color: 'white' }}>Loading 3D Model...</Html>}>
          
          {/* 1. The Model Component */}
          <PowerbankModel 
            // Adjust position and rotation to center the model
            position={[0, -0.5, 0]} 
            rotation={[0, 0.5, 0]} 
          />

          {/* 2. Lighting and Environment */}
          {/* Soft ambient light */}
          <ambientLight intensity={0.5} />
          {/* Main directional light for highlights and shadows */}
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          
          {/* 3. Environment: Provides realistic reflections and ambient lighting */}
          <Environment preset="city" /> 

          {/* 4. User Controls: Allows users to interact with the scene using the mouse */}
          <OrbitControls 
            enableZoom={true} 
            maxPolarAngle={Math.PI / 2} 
          />
        
        </Suspense>
      </Canvas>
    </div>
  );
}

export default PowerbankScene;