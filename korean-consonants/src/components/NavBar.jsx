import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar() {
    return (
        <div>
            <header className='shadow mb-2'>
                <div className='relative flex-col sm:flex-row max-w-screen-lg mx-auto py-4 flex sm:items-center sm:justify-between'>
                    <a className='text-2xl font-black flex items-center' href="">

                        <span><img className='rounded-full w-14 h-14 object-cover ml-2 mr-2' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/233bca4e-2c13-4de9-a446-b4e326bb7def/dfn131w-6e174a8f-eb70-4aec-9700-75f80c6d6bce.png/v1/fill/w_1280,h_1280,q_80,strp/gear_5_luffy_fanart_thing_by_onsoleguy_dfn131w-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzIzM2JjYTRlLTJjMTMtNGRlOS1hNDQ2LWI0ZTMyNmJiN2RlZlwvZGZuMTMxdy02ZTE3NGE4Zi1lYjcwLTRhZWMtOTcwMC03NWY4MGM2ZDZiY2UucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FLFAPRO-nbhHNl_qjneD_WlvwfINoZouUfDdF5JQhIw" alt="" /></span>
                        <span className='logo-text'>ADesign</span></a>

                    <input type="checkbox" className='peer hidden' id='navbar-open' />
                    <span className='sr-only'>Toggle navigation</span>
                    <label className='sm:hidden cursor-pointer absolute right-0 mt-2 text-xl' for="navbar-open">
                    <RxHamburgerMenu className="w-8 h-8 mr-3" />
                    </label>
                    
                    <nav aria-label='Header navigation' className='peer-checked:block hidden mt-4 sm:mt-0 sm:block'>
                        <ul className='flex flex-col sm:flex-row md:gap-x-8 gap-y-4 items-center '>
                            <li><a className='text-gray-600 hover:text-blue-600 mr-3' href="">Inicio</a></li>
                            <li><a className='text-gray-600 hover:text-blue-600 mr-3' href="">Sobre mi</a></li>
                            <li><a className='text-gray-600 hover:text-blue-600 mr-3' href="">Proyectos</a></li>
                            <li><a className='text-gray-600 hover:text-blue-600 mr-3' href="">Contáctame</a></li>
                            <li><a className='mr-2 mt-2 sm:mt-0 hover:bg-blue-600 hover:text-white border-2 px-6 py-2 rounded-xl border-blue-600 font-medium text-blue-600' href="">Login</a></li>
                        </ul>
                    </nav>
                </div>

            </header>

        </div>
    )
}

export default NavBar
