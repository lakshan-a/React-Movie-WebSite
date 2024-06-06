import React from 'react'
import './button.css'

function Button({ icon, name, bgColor='#ff3700', color='#fff' }) {
  return (
    <a href="#" className="mainBtn" style={{color: color, background: bgColor}}>
        {icon} {name}
    </a>
  
  )
}

export default Button