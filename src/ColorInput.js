import React from 'react'
import "./ColorInput.css"

const ColorInput = ({ setColor }) => {
  return (
    <input className='ColorInput' type="text" placeholder='Add color name' onChange={(e) => setColor(e.target.value)} />
  )
}

export default ColorInput