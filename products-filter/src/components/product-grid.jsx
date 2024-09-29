import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ProductGrid = ({ filteredPhones }) => {
  const phoneCardsRef = useRef([]);
  const noProductsRef = useRef(null);

  useEffect(() => {
    // Clear previous animations
    gsap.killTweensOf(phoneCardsRef.current);
    gsap.killTweensOf(noProductsRef.current);

    if (filteredPhones.length > 0) {
      const cards = phoneCardsRef.current.filter(card => card !== null);
      if (cards.length > 0) {
        gsap.fromTo(cards, 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" }
        );
      }
    } else if (noProductsRef.current) {
      gsap.fromTo(noProductsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [filteredPhones]);

  return (
    <div className="w-full md:w-3/4">
      {filteredPhones.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredPhones.map((phone, index) => (
            <div 
              key={phone.id} 
              ref={el => phoneCardsRef.current[index] = el}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img src={phone.image} alt={phone.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{phone.name}</h3>
                <p className="text-xl font-semibold mb-2">₹{phone.price.toFixed(2)}</p>
                <p className="text-sm text-gray-600">Camera: {phone.camera}</p>
                <p className="text-sm text-gray-600">Brand: {phone.brand}</p>
                <p className="text-sm text-gray-600">RAM: {phone.ram}</p>
                <p className="text-sm text-gray-600">Storage: {phone.storage}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div 
          ref={noProductsRef}
          className="bg-white rounded-lg shadow-md p-8 text-center"
        >
          <h3 className="text-xl font-bold mb-2">No products available</h3>
          <p className="text-gray-600">
            Sorry, there are no products that match your selected filters. 
            Please try adjusting your filter criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;