import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import { Suspense } from 'react'

import Orbit from './component/Orbit'
import Box from './component/Box'
import Floor from './component/Floor'
import Background from './component/Background'
import Bulp from './component/Bulp'

import Model from './component/Model'
import BoundingBox from './component/BoundingBox'

import ColorPicker from './component/ColorPicker'
import DragableControl from './component/DragableControl'
import CameraControls from './component/CameraControls'
import CameraButtons from './component/CameraButtons'

function App() {
  return (
      <div style={{height: '100vh', width: '100vw'}}>
            <ColorPicker/>
            <CameraButtons/>
            <Canvas shadows style={{background:'black'}} camera={{position: [7,7,7]}}>
              {/* <fog attach='fog' args={['white',1,10]}/> */}
                <CameraControls/>
                <ambientLight intensity={0.1} />

                <Bulp position={[0,3,0]}/>
                <Bulp position={[-7,3,0]}/>
                <Bulp position={[7,3,0]}/>

                <Physics>
                <Suspense fallback={null}>
                    {/* Model S */}
                    <DragableControl transformGroup>
                        <BoundingBox 
                            // visible 
                            position={[-4,0,0]} 
                            dims={[2,1.5,5]} 
                            offset={[0,-0.6,0.2]}
                        >
                            <Model 
                                path='/tesla_model_s/scene.gltf' 
                                scale={new Array(3).fill(0.6)}
                                // position={[-4,0.15,0]}
                        />
                        </BoundingBox>
                    </DragableControl>
                    {/* Cybertruck */}
                    <DragableControl transformGroup>
                        <BoundingBox 
                            // visible 
                            position={[4,1.1,0]} 
                            dims={[5.7,1.8,2.1]}
                            offset={[0.1,-0.03,0]}
                        >
                            <Model 
                                path='/tesla_cybertruck/scene.gltf' 
                                scale={new Array(3).fill(10)}
                                // position={[4,1.1,0]}
                            />
                        </BoundingBox>
                    </DragableControl>
                    <DragableControl>
                        <Box position={[-2,1,0]}/>
                    </DragableControl>
                    <DragableControl>
                        <Box position={[2,1,-5]}/>
                    </DragableControl>

                    <Background/>
                    <Floor position={[0,-0.5,0]}/>
                </Suspense>
                </Physics>

                <Orbit/>
                <axesHelper args={[5]}/>
          </Canvas>
      </div>
  )
}

export default App
