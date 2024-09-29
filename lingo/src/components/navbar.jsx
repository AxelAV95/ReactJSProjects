import React from 'react'
import { Link } from 'react-router-dom';
import { Bell, User } from 'lucide-react';


const NavBar = () => {
    return (
        <>
            <header className="bg-[#1cb0f6] p-4">
                <nav className="container mx-auto flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold">
                        Lingo
                    </Link>
                    <div className="hidden md:flex space-x-4">
                        <Link to="/learn" className="hover:text-[#235390]">
                            Learn
                        </Link>
                        <Link to="/discuss" className="hover:text-[#235390]">
                            Discuss
                        </Link>
                        <Link to="/shop" className="hover:text-[#235390]">
                            Shop
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Bell className="h-6 w-6" />
                        <User className="h-6 w-6" />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar
