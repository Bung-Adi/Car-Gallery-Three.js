import React from 'react'

const Bulp = props => {
    return(
        <mesh {...props}>
            <pointLight castShadow/>
            <sphereGeometry args={[0.2]}/>
            <meshPhongMaterial emissive={'yellow'}/>
        </mesh>
    )
}

export default Bulp