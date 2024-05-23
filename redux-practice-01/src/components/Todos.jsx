import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BsFillTrash3Fill,BsFillPencilFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeTodo, editTodo} from "../features/todo/todoSlice";


function Todos() {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();
  const [input, setInput] = useState(""); 

 
  return (
    <>

      <div>
        Todos
      </div>
      {
        todos.map((todo) => (
          <ul className='list-none' key={todo.id}>
            <li className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'>
              <div className=''>
                <input type='text' value={todo.text}  onChange={(e) => setInput(e.target.value)}/>
              </div>
              <button className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
              onClick={() => dispatch(editTodo({id: todo.id, text: input}))}
              >
              <BsFillPencilFill />
              </button>
              <button
                onClick={() => dispatch(removeTodo({id: todo.id}))}
                className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
              >
                <BsFillTrash3Fill />
              </button>
            </li>
          </ul>
        ))
        
      }
    </>

  )
}

export default Todos
