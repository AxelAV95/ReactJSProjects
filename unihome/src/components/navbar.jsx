import React from 'react'

const NavBar = ({toggleMenu, isMenuOpen}) => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-gray-800">
      <img src="/logo.png" alt="Logo" className="h-8" />
    </a>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="nav-item text-gray-600 hover:text-blue-800 text-base">Lugares para estudiar</a>
                    <a href="#" className="nav-item text-gray-600 hover:text-blue-800 text-base">Recomendaciones</a>
                    <a href="#" className="nav-item text-gray-600 hover:text-blue-800 text-base">Registrate</a>
                    <a href="#" className="nav-item text-gray-600 hover:text-blue-800 text-base">Planes</a>
                </div>
                <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <div className={`mobile-menu fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="p-4">
                    <button className="mb-4" onClick={toggleMenu} aria-label="Close menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="flex flex-col space-y-4">
                        <a href="#" className="text-gray-600 hover:text-gray-800">Lugares para estudiar</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">Recomendaciones</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">Registrate</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">Planes</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
