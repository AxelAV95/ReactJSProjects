import React, { useState } from 'react'

function Todo() {

    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")

    function generateId(){
        return Math.floor(Math.random()*10000)
    }
const onHandleSubmit = ()=>{
    setTodos((todos) =>
        todos.concat({
            text: input,
            id: generateId()
        })
        
    )
    setInput("")
}

const removeTodo = (id)=>{
    setTodos((todos) => todos.filter((t)=> t.id !== id))
}
  return (
    <div className='bg-container_background p-12'>
      <input type="text" className='p-4 border-none outline-none bg-input-background w-72 mr-4 text-black' value={input} onChange={(e) => setInput(e.target.value)} placeholder='New Todo' />
      <button className='rounded-full bg-gray-800 px-5 py-2 border-none outline-none text-white cursor-pointer' onClick={onHandleSubmit}>Submit</button>

      <ul className='mt-12'>
        {
         todos.map(({text,id})=>{
            return(
            <li key={id} className='flex items-center justify-between bg-item_todo_background p-2 my-4 font-sans'>
                <span>{text}</span>
                <button className='rounded-full bg-gray-800 px-5 py-2 border-none outline-none text-white cursor-pointer' onClick={() => removeTodo(id)}>X</button>
            </li>
            )
         })   

        }
      </ul>
    </div>
  )
}

export default Todo
Todo