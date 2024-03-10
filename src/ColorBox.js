import React from 'react'
import "./ColorBox.css"

const ColorBox = ({ color }) => {
  return (
    <section className="ColorBox" style={{backgroundColor: color}}>
          {color ? color : "Empty Value"}        
    </section>
  )
}

export default ColorBox