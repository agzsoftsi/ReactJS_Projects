import React from 'react'
import './Button.css'

function Button({ name, clickBtn, action }) {
  return (
    <button 
        className={ clickBtn ? 'btn-counter-click' : 'btn-counter-restart' }
        onClick={ action }
    >
        {name} 
    </button>
  )
}

export default Button