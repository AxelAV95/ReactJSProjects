import React from 'react'

const HowSection = () => {
    return (
        <section className="section how-it-works bg-white py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">¿Cómo funciona?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Si eres estudiante</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">Encuentra el alojamiento perfecto para tu etapa de estudios. Accede a opciones verificadas, seguras y adaptadas a tus necesidades.</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">Registrarte ahora</button>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Si ofreces alquiler</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">Publica tu propiedad y conéctate con estudiantes y profesionales en busca de alojamiento. Gestiona tus reservas de forma sencilla.</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">Publicar propiedad</button>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Si tienes algún negocio</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">Promociona tus servicios a nuestra comunidad de estudiantes y profesionales. Aumenta tu visibilidad y atrae nuevos clientes.</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">Anunciar tu negocio</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowSection
