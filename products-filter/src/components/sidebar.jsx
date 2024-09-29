import React from 'react';

const Sidebar = ({ 
  priceRange, 
  selectedBrands, 
  selectedRAM, 
  selectedStorage, 
  onPriceChange, 
  onBrandChange, 
  onRAMChange, 
  onStorageChange, 
  brands, 
  ramOptions, 
  storageOptions 
}) => {
  return (
    <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      
      {/* Price Range */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Price</h3>
        <div className="flex items-center justify-between mb-2">
          <input 
            type="number" 
            min="0" 
            max={priceRange[1]} 
            value={priceRange[0]} 
            onChange={(e) => onPriceChange(e, 0)}
            className="w-20 p-1 border rounded"
          />
          <span>to</span>
          <input 
            type="number" 
            min={priceRange[0]} 
            max="20000" 
            value={priceRange[1]} 
            onChange={(e) => onPriceChange(e, 1)}
            className="w-20 p-1 border rounded"
          />
        </div>
        <input 
          type="range" 
          min="0" 
          max="20000" 
          value={priceRange[1]} 
          onChange={(e) => onPriceChange(e, 1)}
          className="w-full"
        />
      </div>

      {/* Brand Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Brand</h3>
        <div className="max-h-40 overflow-y-auto">
          {brands.map(brand => (
            <label key={brand} className="flex items-center mb-1">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => onBrandChange(brand)}
                className="mr-2"
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

      {/* RAM Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">RAM</h3>
        {ramOptions.map(ram => (
          <label key={ram} className="flex items-center mb-1">
            <input
              type="checkbox"
              checked={selectedRAM.includes(ram)}
              onChange={() => onRAMChange(ram)}
              className="mr-2"
            />
            {ram}
          </label>
        ))}
      </div>

      {/* Internal Storage Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Internal Storage</h3>
        {storageOptions.map(storage => (
          <label key={storage} className="flex items-center mb-1">
            <input
              type="checkbox"
              checked={selectedStorage.includes(storage)}
              onChange={() => onStorageChange(storage)}
              className="mr-2"
            />
            {storage}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;