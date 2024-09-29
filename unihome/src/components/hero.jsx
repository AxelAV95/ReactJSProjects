import React from 'react'

const Hero = () => {
    return (
        <section className="section hero bg-gray-100 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-relaxed">Encuentra un lugar mientras estudias</h1>
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">Comenzar</button>
                    </div>
                    <div className="md:w-1/2">
                        <img src="/hero.png?height=300&width=400" alt="Hero image" className="w-full h-auto rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
