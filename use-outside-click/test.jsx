import React, { useRef, useState } from 'react'
import UseOutsideClick from '.'

function UseOnclickOutsideTest() {
    const ref = useRef()
    
    
    const [showContent, setShowContent] = useState(false)
    UseOutsideClick(ref, ()=>setShowContent(false))
  return (
    <div ref={ref}>
      {
        showContent ?<div>
            <h1>This is a random content</h1>
            <p>Please click outside of this to close</p>
        </div> :<button onClick={()=>setShowContent(true)}>Show content</button>
      }
    </div>
  )
}

export default UseOnclickOutsideTest
