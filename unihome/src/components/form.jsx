import React from 'react'

const Form = () => {
    return (
        <section className="section contact-form bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">¿Tienes dudas? No dudes en contactarnos</h2>
                <form className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <input type="text" placeholder="Nombre" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <textarea placeholder="Mensaje" rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">Contactar</button>
                </form>
            </div>
        </section>
    )
}

export default Form
