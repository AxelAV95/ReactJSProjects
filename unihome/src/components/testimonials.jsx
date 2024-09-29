import React from 'react'

const Testimonials = () => {
    return (
        <section className="section testimonials bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Testimonios</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {[1, 2].map((_, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 max-w-sm">
                            <p className="text-gray-600 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="flex items-center">
                                <img src="/user.png?height=50&width=50" alt={`User ${index + 1}`} className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <p className="font-semibold">User {index + 1}</p>
                                    <p className="text-sm text-gray-500">Student</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
