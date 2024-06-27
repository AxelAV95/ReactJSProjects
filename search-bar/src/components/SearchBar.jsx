import axios from 'axios';
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaArrowLeft } from "react-icons/fa";
import 'animate.css';

function SearchBar({ setResult, option, setOption, setShowResults }) {

  // const [input, setInput] = useState("")

  const [icon, setIcon] = useState(true)
  const [placeholder, setPlaceHolder] = useState("Search for something")

  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const userData = (value) => {
    axios(API_URL)
      .then(res => {
        const result = res.data.filter(user => {
          return user && user.name && user.name.toLowerCase().includes(value)
        })
        setResult(result)
        setShowResults(true)
      }).catch(err => console.log(err))
  }

  const toggleIcon = () => {
    setIcon(!icon); // Alterna el estado del ícono
}

  const handleChange = (value) => {
    setOption(value)
    userData(value)
    
    // setIcon(false)
  }

  const handleBlur = () => {
    
    setIcon(true);
    setPlaceHolder("Search for something")
    
}


  return (
    <div className='bg-[#2f3134] w-full rounded-lg h-[12] p-4 shadow-lg flex items-center'>

      {icon
        ? <FaSearch className='text-violet-500 text-2xl cursor-pointer animate__animated animate__flip animate__faster' />
        : <FaArrowLeft className='text-violet-500 text-2xl  cursor-pointer animate__animated animate__rotateIn animate__faster' />}
      <input value={option}  onFocus={() => setIcon(false)}
  onBlur={handleBlur} onClick={()=> setPlaceHolder("")} onChange={(e) => handleChange(e.target.value)} className='bg-transparent border-none outline-none text-xl ml-4 placeholder:text-gray-300 text-white w-full' type="text" placeholder={placeholder} />
    </div>
  )
}

export default SearchBar
