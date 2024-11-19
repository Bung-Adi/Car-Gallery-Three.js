import React from 'react'

const ColorPicker = props => {
    const colorPanelClick = e => {
        if(!window.activeMesh) return
        window.activeMesh.material.color = new THREE.Color(e.target.style.background)
    }
    return (
        <div style={{position: 'absolute', zIndex:1}}>
            <div style={{background:'blue', width:50, height:50}} onClick={colorPanelClick}></div>
            <div style={{background:'yellow', width:50, height:50}} onClick={colorPanelClick}></div>
            <div style={{background:'white', width:50, height:50}} onClick={colorPanelClick}></div>
        </div>
    )
}

export default ColorPicker