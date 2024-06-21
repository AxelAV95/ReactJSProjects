import React, { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import clsx from 'clsx';
import 'animate.css';
import { Component } from './Component';
import { AvatarComponent } from './Avatar';
// import { SidebarMenu } from './SidebarMenu';



function NavBar() {

  const [menuSidebarOpen, setMenuSidebarOpen] = useState(false)
  const handleClose = () => setMenuSidebarOpen(false);
  const navLinks = [
    {
      titulo: "Item 1",
      tipo: "Valoraciones",
      
    }
  ]

  return (
    <nav className='flex justify-between px-8 items-center py-6 bg-stone-200'>

      <div className='flex items-center gap-8'>
        <div className='flex items-center gap-4'>
          <IoMenuSharp onClick={() => setMenuSidebarOpen(true)} className='text-3xl cursor-pointer lg:hidden' />
          <a href="" className='text-4xl font-mono'>Logo</a>
        </div>
        <ul className='flex items-center gap-8'>
          <li className='text-gray-400 hover:text-black hidden lg:block'>Item 1</li>
          <li className='text-gray-400 hover:text-black hidden lg:block'>Item 1</li>
          <li className='text-gray-400 hover:text-black hidden lg:block'>Item 1</li>
        </ul>
      </div>


      {/* <SidebarMenu option={menuSidebarOpen}/>  */}
      <Component state={menuSidebarOpen} handleClose={handleClose}/>
      
      {/* <div className={clsx("fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all", menuSidebarOpen && "translate-x-0")}>
        <div className='text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex'>
          <IoIosCloseCircleOutline onClick={() => setMenuSidebarOpen(false)} className='mt-0 mb-3 ml-56 text-5xl cursor-pointer text-white' />
          <ul>
            <li className='font-bold'>Item 1</li>
            <li className='font-bold'>Item 1</li>
            <li className='font-bold'>Item 1</li>
          </ul> 
        </div>
      </div> */}

      <div className='flex items-center gap-4'>
        <IoCartOutline className='text-3xl' />
        {/* <img className='rounded-full w-14 h-14 object-cover ml-2 mr-2' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/233bca4e-2c13-4de9-a446-b4e326bb7def/dfn131w-6e174a8f-eb70-4aec-9700-75f80c6d6bce.png/v1/fill/w_1280,h_1280,q_80,strp/gear_5_luffy_fanart_thing_by_onsoleguy_dfn131w-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzIzM2JjYTRlLTJjMTMtNGRlOS1hNDQ2LWI0ZTMyNmJiN2RlZlwvZGZuMTMxdy02ZTE3NGE4Zi1lYjcwLTRhZWMtOTcwMC03NWY4MGM2ZDZiY2UucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FLFAPRO-nbhHNl_qjneD_WlvwfINoZouUfDdF5JQhIw" alt="" /> */}
        <AvatarComponent/>
      </div>

    </nav>
  )
}

export default NavBar
