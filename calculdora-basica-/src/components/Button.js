import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <div className='Button-container'>
      <button className={ !isNaN(props.children) ? 'Button-num' : 'Button-simbol' }
        onClick={() => props.action(props.children)}
      >
        {props.children}
      </button>
    </div>
  )
}

export default Button