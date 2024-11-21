import { useState, useEffect } from "react";

export default function Form({ item, onSave, onCancel }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Cargar datos iniciales del elemento (si lo hay)
  useEffect(() => {
    if (item) {
      setName(item.name || "");
      setDescription(item.description || "");
    } else {
      setName("");
      setDescription("");
    }
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: item?.id, name, description });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">
        {item ? "Editar elemento" : "Insertar nuevo elemento"}
      </h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mt-1 p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Descripción:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mt-1 p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {item ? "Guardar cambios" : "Insertar"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
