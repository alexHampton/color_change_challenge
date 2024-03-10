import React from 'react'
import "./ColorBox.css"

const ColorBox = ({ color }) => {
  return (
    <div className="ColorBox" style={{backgroundColor: color}}>
        {color ? <div>{color}</div> 
               : <div>Empty Value</div>}
    </div>
  )
}

export default ColorBox