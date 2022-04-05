import React from 'react'
import './ClearBtn.css'

function ClearBtn(props) {
  return (
    <button className='Button-clear'
        onClick={props.action}
    >{props.children}</button>
  )
}

export default ClearBtn