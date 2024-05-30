import React, { useRef } from 'react'
import UseFetch from '../use-fetch'

function ScrollTopToBottom() {

    const { data, error, pending } = UseFetch('https://dummyjson.com/products?limit=100', {})
    const bottomRef = useRef()

    const handleOnTop = ()=>{
        window.scrollTo({
            top: 0,left: 0, behavior: 'smooth'
        })
    }

    const handleOnBottom = ()=>{
        bottomRef.current.scrollIntoView({behavior: 'smooth'})
    }

    if(error){
        return <h1>Error</h1>
    }

    if(pending){
        return <h1>Loading....</h1>
    }
    return (
        <div>
            <h1>Scroll to top and bottom feature</h1>
            <h3>This is top section</h3>
            <button onClick={handleOnBottom}>Scroll to bottom</button>
            <ul style={{listStyle: 'none'}}>
                {
                    data && data.products && data.products.length ? 
                    
                    data.products.map((item, index) =>
                        <li key={index}>{item.title}</li>
                    )
                    : null
                }
            </ul>

            <button onClick={handleOnTop}>Scroll to top</button>
            <div ref={bottomRef}></div>
            <h3>Bottom section</h3>
        </div>
    )
}

export default ScrollTopToBottom


