import { DragControls } from 'three/addons/controls/DragControls.js'
import { useEffect, useRef, useState } from 'react'
import { extend, useThree } from '@react-three/fiber'
extend({DragControls})

// here all u need to add drag control while u have orbit too
// https://threejs.org/docs/index.html?q=drag#examples/en/controls/DragControls
// https://threejs.org/docs/index.html?q=drag#api/en/core/EventDispatcher

const DragableControl = props => {
    const gRef = useRef()
    const controlRef = useRef()
    const [box, setBox] = useState([])
    const {camera,gl,scene} = useThree()
    // console.log(props.children)

    useEffect(() => {
        // console.log(gRef.current)
        setBox(gRef.current.children)
    },[])

    useEffect(() => {
        // dont forget to add properties attach='orbitControls' on orbit.jsx
        controlRef.current.addEventListener('hoveron',e => scene.orbitControls.enabled = false)
        controlRef.current.addEventListener('hoveroff',e => scene.orbitControls.enabled = true)
        controlRef.current.addEventListener('dragstart',e => e.object.api?.mass.set(0))
        controlRef.current.addEventListener('dragend',e => e.object.api?.mass.set(1))
        controlRef.current.addEventListener('drag',e => {
            e.object.api?.position.copy(e.object.position)
            e.object.api?.velocity.set(0,0,0)
        })
    },[box])
    
    return (
        <group ref={gRef}>
            <dragControls 
                transformGroup={props.transformGroup}
                ref={controlRef} 
                args={[box, camera, gl.domElement]}
            />
            {props.children}
        </group>
    )
}

export default DragableControl