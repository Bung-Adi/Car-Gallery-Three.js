import React from 'react'
import { Canvas, useFrame, useThree, extend, useLoader } from '@react-three/fiber'
import { useRef, Suspense } from 'react'
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'
extend({OrbitControls})

const Background = props => {
    // // here the other way
    // const texture = useLoader(THREE.TextureLoader,'/sky.jpg')
    // return(
    //     <primitive attach='background' object={texture}/>
    // )
    const { scene } = useThree()
    const texture = useLoader(THREE.TextureLoader, 'autoshop.jpg')
    texture.mapping = THREE.EquirectangularReflectionMapping
    scene.background = texture
    return null
}

export default Background