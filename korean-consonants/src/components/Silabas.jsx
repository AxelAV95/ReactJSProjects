import React from 'react';
import Cuadro from './Cuadro';
import 'animate.css';

function Silabas() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-1 p-4">
                <Cuadro animation={'animate__animated animate__zoomIn shadow-2xl'} silaba={'바'}/>
                <Cuadro animation={'animate__animated animate__zoomIn shadow-2xl'} silaba={'파'}/>
                <Cuadro animation={'animate__animated animate__zoomIn shadow-2xl'} silaba={'빠'}/>
                <Cuadro animation={'animate__animated animate__zoomIn shadow-2xl'} silaba={'다'}/>
                <Cuadro animation={'animate__animated animate__zoomIn shadow-2xl'} silaba={'타'}/>
                <Cuadro animation={'animate__animated animate__zoomIn shadow-2xl'} silaba={'따'}/>
                <Cuadro animation={'animate__animated animate__zoomIn shadow-2xl'} silaba={'사'}/>
                <Cuadro animation={'animate__animated animate__zoomIn shadow-2xl'} silaba={''}/>
                <Cuadro animation={'animate__animated animate__zoomIn shadow-2xl'}silaba={'싸'}/>
                
                <Cuadro animation={'animate__animated animate__zoomIn shadow-2xl'} silaba={'가'}/>
                <Cuadro animation={'animate__animated animate__zoomIn shadow-2xl'} silaba={'카'}/>
                <Cuadro animation={'animate__animated animate__zoomIn shadow-2xl'} silaba={'까'}/>
                <Cuadro animation={'animate__animated animate__zoomIn shadow-2xl'} silaba={'자'}/>
                <Cuadro animation={'animate__animated animate__zoomIn shadow-2xl'} silaba={'차'}/>
                <Cuadro animation={'animate__animated animate__zoomIn shadow-2xl'} silaba={'짜'}/>
                
            </div>
        </div>
    );
}

export default Silabas;
