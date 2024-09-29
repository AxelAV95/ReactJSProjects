import React from 'react'

const plansData = [
  {
    name: "Plan Básico",
    price: "2500 colones",
    description: "Publicar +3 casas",
    features: ["Publcar 3 casas"]
  },
  {
    name: "Plan Premium",
    price: "5000 colones",
    description: "Publicar +6 casas",
    features: ["Publicar 6 casas"]
  },
  {
    name: "Plan Premium Plus",
    price: "10000 colones",
    description: "Publicar +12 casas",
    features: ["Publicar 12 casas"]
  },
  {
    name: "Plan Business Advertising",
    price: "3000 colones",
    description: "Estar en sección de negocios",
    features: ["Ser recomendado", "Estar en sección de negocios"]
  }
];

const Plans = () => {
  return (
    <section className="section pricing-plans bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Nuestros planes</h2>
        <h4 className='text-center text-base mb-8 leading-relaxed'>
          Contamos con distintos planes de suscripción mensual por mantener la publicidad de su servicio de alquiler o por el servicio de su negocio con ciertos beneficios.
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plansData.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-center">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.price}</p>
              <ul className="text-sm mb-6">
                <h2 className='text-base font-bold text-center'>Beneficios: </h2>
                {plan.features.map((feature, idx) => (
                  <li className='text-center' key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 mt-auto">Seleccionar</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
