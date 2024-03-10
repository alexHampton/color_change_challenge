import React from 'react'
import "./ColorBox.css"

const ColorBox = ({ color }) => {
  return (
    <div className="ColorBox" style={{backgroundColor: color}}>
        <div>{color}</div>
    </div>
  )
}

export default ColorBox