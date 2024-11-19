import React from 'react'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useLoader } from '@react-three/fiber'

// see more at https://threejs.org/docs/index.html?q=GLT#examples/en/loaders/GLTFLoader

const Model = props => {
    const model = useLoader(GLTFLoader,props.path)
    console.log(model)
    return (
        <primitive 
            object={model.scene}
            scale={props.scale}
            position={props.position}
        />
    )
}

export default Model