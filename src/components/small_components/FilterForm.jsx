// src/components/FilterForm.jsx
import React, { useState } from "react";

const FilterForm = ({ onSubmit }) => {
  const [brand, setBrand] = useState("");
  const [fragranceFamily, setFragranceFamily] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar datos del formulario al componente principal para filtrar
    onSubmit({ brand, fragranceFamily, priceRange });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full px-4 py-6 bg-gray-100">
      <h2 className="text-lg font-semibold mb-4">Filtrar Perfumes</h2>
      <div className="mb-4">
        <label htmlFor="brand" className="block mb-2 font-medium">
          Marca:
        </label>
        <select
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {/* Opciones de marca */}
        </select>
      </div>
      {/* Otros campos de filtro (familia olfativa, rango de precio, etc.) */}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
      >
        Filtrar
      </button>
    </form>
  );
};

export default FilterForm;
