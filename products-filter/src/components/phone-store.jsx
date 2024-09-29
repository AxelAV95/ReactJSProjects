import React, { useState, useEffect } from 'react';

import ProductGrid from './product-grid';
import Sidebar from './sidebar';

const phones = [
    {
      id: 1,
      name: "Honor 9 Lite",
      price: 14499.00,
      brand: "Honor",
      ram: "4 GB",
      storage: "64 GB",
      camera: "13 MP",
      image: "/1.png"
    },
    {
      id: 2,
      name: "Infinix Hot S3",
      price: 8999.00,
      brand: "Infinix",
      ram: "3 GB",
      storage: "32 GB",
      camera: "13 MP",
      image: "/2.png"
    },
    {
      id: 3,
      name: "VIVO V9 Youth",
      price: 16990.00,
      brand: "VIVO",
      ram: "4 GB",
      storage: "32 GB",
      camera: "16 MP",
      image: "/3.png"
    },
    {
      id: 4,
      name: "Moto E4 Plus",
      price: 11499.00,
      brand: "Moto",
      ram: "3 GB",
      storage: "32 GB",
      camera: "8 MP",
      image: "/4.png"
    },
    {
      id: 5,
      name: "Lenovo K8 Plus",
      price: 9899.00,
      brand: "Lenovo",
      ram: "3 GB",
      storage: "32 GB",
      camera: "13 MP",
      image: "/5.png"
    },
    {
      id: 6,
      name: "Samsung Galaxy On Nxt",
      price: 10990.00,
      brand: "Samsung",
      ram: "3 GB",
      storage: "16 GB",
      camera: "13 MP",
      image: "/6.png"
    },
    {
      id: 7,
      name: "Moto C Plus",
      price: 7799.00,
      brand: "Moto",
      ram: "2 GB",
      storage: "16 GB",
      camera: "8 MP",
      image: "/7.webp"
    },
    {
      id: 8,
      name: "Panasonic P77",
      price: 5999.00,
      brand: "Panasonic",
      ram: "1 GB",
      storage: "16 GB",
      camera: "8 MP",
      image: "/8.png"
    }
  ]

const brands = [...new Set(phones.map(phone => phone.brand))];
const ramOptions = [...new Set(phones.map(phone => phone.ram))];
const storageOptions = [...new Set(phones.map(phone => phone.storage))];

export default function PhoneStore() {
  const [filteredPhones, setFilteredPhones] = useState(phones);
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRAM, setSelectedRAM] = useState([]);
  const [selectedStorage, setSelectedStorage] = useState([]);

  useEffect(() => {
    filterPhones();
  }, [priceRange, selectedBrands, selectedRAM, selectedStorage]);

  const filterPhones = () => {
    const filtered = phones.filter(phone => {
      const price = parseFloat(phone.price);
      const matchesPriceRange = price >= priceRange[0] && price <= priceRange[1];
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(phone.brand);
      const matchesRAM = selectedRAM.length === 0 || selectedRAM.includes(phone.ram);
      const matchesStorage = selectedStorage.length === 0 || selectedStorage.includes(phone.storage);
      
      return matchesPriceRange && matchesBrand && matchesRAM && matchesStorage;
    });
    
    setFilteredPhones(filtered);
  };

  const handlePriceChange = (e, index) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = parseInt(e.target.value);
    setPriceRange(newPriceRange);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const handleRAMChange = (ram) => {
    setSelectedRAM(prev => 
      prev.includes(ram) ? prev.filter(r => r !== ram) : [...prev, ram]
    );
  };

  const handleStorageChange = (storage) => {
    setSelectedStorage(prev => 
      prev.includes(storage) ? prev.filter(s => s !== storage) : [...prev, storage]
    );
  };

  return (
    <div className="flex flex-col md:flex-row p-4 bg-gray-100 min-h-screen">
        
      <Sidebar 
        priceRange={priceRange}
        selectedBrands={selectedBrands}
        selectedRAM={selectedRAM}
        selectedStorage={selectedStorage}
        onPriceChange={handlePriceChange}
        onBrandChange={handleBrandChange}
        onRAMChange={handleRAMChange}
        onStorageChange={handleStorageChange}
        brands={brands}
        ramOptions={ramOptions}
        storageOptions={storageOptions}
      />
      <ProductGrid filteredPhones={filteredPhones} />
    </div>
  );
}