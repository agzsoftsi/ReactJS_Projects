import React from 'react'
import './Counter.css'

function Counter({ click }) {
  return (
    <div className='counter-container'>
      {click}
    </div>
  )
}

export default Counter