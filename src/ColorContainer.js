import React, { useState } from 'react'
import "./ColorContainer.css"
import ColorBox from './ColorBox'
import ColorInput from './ColorInput'

const ColorContainer = () => {
    const [color, setColor] = useState('')

  return (
    <div className="ColorContainer">
        <ColorBox color={color} />
        <ColorInput setColor={setColor} />
    </div>
  )
}

export default ColorContainer