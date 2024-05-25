import React, { useEffect, useState } from 'react'
import {} from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './styles.css'

function ImageSlider({url,limit = 5, page = 1}) {
    const [images,setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)


    async function fetchImages(url){
        try{
            setLoading(true)

            const response = await fetch(`${url}?page=${page}&limit=${limit}`)
            const data = await response.json()
            if(data){
                setImages(data)
                setLoading(false)
            }
        }catch(e){
            setErrorMsg(e.message)
            setLoading(false)
        }
    }
    useEffect(()=>{
        if(url !== ''){
            fetchImages(url)
        }
    },[url])
    
    console.log(images)
    if(loading){
        return <div>Loading data! Please wait</div>
    }

    if(errorMsg !== null){
        return <div>Error occurred! {errorMsg} </div>
    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
      }
    
      function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
      }
    
  return (
    <div className='container'>
      <BsArrowLeftCircleFill   onClick={handlePrevious} className='arrow arrow-left'/>
      {
        images && images.length ? 
        images.map((item, index) => (
            <img
              key={item.id}
              alt={item.download_url}
              src={item.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
        ))
        :  null
      }
      <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right'/>
      <span className='circle-indicators'>
        {
            images && images.length ?
            images.map((_,index) =>
                <button key={index} 
                className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  onClick={() => setCurrentSlide(index)}
                
                ></button>
            )
            :null
        }

      </span>
    </div>
  )
}

export default ImageSlider
