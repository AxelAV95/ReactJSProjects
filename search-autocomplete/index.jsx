import React, { useEffect, useState } from 'react'
import Suggestions from './suggestions'

function SearchAutocomplete() {

    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [searchParam, setSearchParam] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState([])

    const getUsers = async () =>{

        try{
            setLoading(true)
            const response = await fetch('https://dummyjson.com/users')
            const data = await response.json()

            if(data && data.users && data.users.length){
                
                setUsers(data.users.map(item=> item.firstName))
                setLoading(false)
                setError(null)
            }

        }catch(error){
            console.log(error.message)
            setError(error.message)
            setLoading(false)
        }
    }

    const handleOnChange = (event)=>{
        const query = event.target.value.toLowerCase()
        setSearchParam(query)
        
        if(query.length > 1){
            const filteredData = users && users.length ? users.filter((item) => item.toLowerCase().indexOf(query) > -1) : []
            setFilteredUsers(filteredData)
            setShowDropdown(true)
        }else{
            setShowDropdown(false)
        }
    }

    function handleClick(event){
        setShowDropdown(false)
        setSearchParam(event.target.innerText)
        setFilteredUsers([])
      }

    useEffect(()=>{
        getUsers();
    },[])
  return (
    <div>
      <div className='search-autocomplete-container'>
        <input type="text" name="search-users" placeholder='Search users here' value={searchParam} onChange={handleOnChange}/>
        {
            showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers}/>
        }
      </div>
    </div>
  )
}

export default SearchAutocomplete
