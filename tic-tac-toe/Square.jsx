import React from 'react'

function Square({value, onClick, color}) {
  return (
    <button onClick={onClick} className='square' style={{background: color}}>
        {value}
    </button>
  )
}

export default Square
