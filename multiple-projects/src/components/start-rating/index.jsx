import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './styles.css'

function StarRating({nStars = 5}) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(index){
        setRating(index)
    }

    function handleMouseEnter(index){
        setHover(index)
    }

    function handleMouseLeave(){
        setHover(rating)
    }

  return (
    <div className='star-rating'>
      {
        [...Array(nStars)].map((_,index)=>{
            index+= 1
            return <FaStar key={index} className={index <= (hover || rating ) ? 'active' : 'inactive'} onClick={()=>handleClick(index)} onMouseEnter={()=> handleMouseEnter(index)} onMouseLeave={()=>handleMouseLeave()} size={40}/>
        })
      }
    </div>
  )
}

export default StarRating
