import React from 'react'

const Main = () => {
    return (
        <section className="section main-content bg-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/3 pr-4">
                        <h2 className="text-2xl font-bold mb-4">¿Qué estás esperando?</h2>
                        <p className="mb-4 text-justify leading-relaxed">Con UniHome buscamos que estudiantes y negocios de la zona sean beneficiados. Si eres estudiante y buscas un lugar donde
                            residir durante tus estudios universitarios, te
                            recomendamos los mejores lugares calificados utilizados por los demás usuarios lo
                            cual te provee un criterio para elegir. Si ofreces servicios de alquiler, te damos la oportunidad de publicar y ser anunciado según diferentes planes y puedas recibir bastantes clientes. No solo eso, UniHome ofrece un plan para que negocios publiquen sus servicios de comida, transporte o según se necesita.
                        </p>
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">Registrate</button>
                    </div>
                    <div className="md:w-1/3 mt-6 md:mt-0">
                        <img src="/main.png?height=200&width=300" alt="Content image" className="w-full h-auto rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main
