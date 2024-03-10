import React from 'react'
import "./ColorInput.css"

const ColorInput = ({ setColor }) => {
  return (
    <input className='ColorInput' type="text" onChange={(e) => setColor(e.target.value)} />
  )
}

export default ColorInput