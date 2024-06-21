import React from 'react'

function Curso() {
    return (
        <div className='flex flex-row mt-4 ml-8 mr-8 justify-center'>
            <div className="w-98 h-98 basis-1/4">
                <img className="w-full h-full object-cover" src="https://www.freecodecamp.org/espanol/news/content/images/2021/01/Course-Image-1.png" alt="" />
            </div>

            <div className='flex flex-row ml-3 basis-1/4'>
                <div className='mr-8 gap-3 '>
                    <h2>Curso titulo</h2>
                    <p className='line-clamp-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div>Calificacion</div>
                    <div></div>
                </div>
                <div className='basis-1/2'>
                    <h2>Precio</h2>
                </div>
            </div>
            <hr />
        </div>

    )
}

export default Curso
