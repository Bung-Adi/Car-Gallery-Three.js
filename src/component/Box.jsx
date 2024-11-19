import React from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { useBox } from '@react-three/cannon'

// for physhic read https://github.com/pmndrs/use-cannon/blob/master/packages/react-three-cannon/README.md

const Box = props => {
    const [ref, api] = useBox(() => ({ mass: 1, ...props }))
    // const ref = useRef()
    const texture = useLoader(THREE.TextureLoader,'/wood.jpg')
  
    // useFrame(state => {
    //     ref.current.rotation.y += 0.01
    //     ref.current.rotation.x += 0.01
    // })
  
    const handlePointerDown = e => {
        console.log(e)
        e.object.active=true
        if (window.activeMesh) {
            scaleDown(window.activeMesh)
            window.activeMesh.active = false;
        }
        window.activeMesh = e.object
    }
  
    const handlePointerEnter = e => {
        e.object.scale.x = 1.5
        e.object.scale.y = 1.5
        e.object.scale.z = 1.5
    }
  
    const handlePointerLeave = e => {
        if (!e.object.active) {
            scaleDown(e.object)
        }
    }
  
    const scaleDown = object => {
        object.scale.x = 1
        object.scale.y = 1
        object.scale.z = 1
    }
  
    return(
        <mesh 
            api={api}
            ref={ref} 
            {...props}
            castShadow
            onPointerDown={handlePointerDown}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        > 
                <boxGeometry args={[1,1,1]}/>
                <meshPhysicalMaterial 
                    map={texture}
                    clearcoat={1.0}
                    reflectivity={1.0} 
                    side={THREE.DoubleSide}
                />
        </mesh>
    )
}

export default Box