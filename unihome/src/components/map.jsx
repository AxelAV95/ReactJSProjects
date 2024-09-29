import React from 'react'

const Map = () => {
  return (
    <section className="section map bg-white py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Visualiza lugares con nuestro mapa interactivo</h2>
          <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Map placeholder</p>
            
          </div>
          <div className="text-center mt-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">Ver mapa</button>
          </div>
        </div>
      </section>
  )
}

export default Map
