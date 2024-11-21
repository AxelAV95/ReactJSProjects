import { useState } from "react";
import Form from "../components/form";



export default function Home() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", description: "Description 1" },
    { id: 2, name: "Item 2", description: "Description 2" },
  ]);

  const [selectedItem, setSelectedItem] = useState(null); // Elemento seleccionado
  const [isFormOpen, setIsFormOpen] = useState(false); // Estado del formulario

  const handleEdit = (item) => {
    setSelectedItem(item); // Asigna el elemento a editar
    setIsFormOpen(true); // Abre el formulario
  };

  const handleInsert = () => {
    setSelectedItem(null); // Limpia el elemento seleccionado
    setIsFormOpen(true); // Abre el formulario
  };

  const handleSave = (item) => {
    if (item.id) {
      // Actualizar un elemento existente
      setItems((prevItems) =>
        prevItems.map((i) => (i.id === item.id ? item : i))
      );
    } else {
      // Insertar un nuevo elemento
      setItems((prevItems) => [
        ...prevItems,
        { ...item, id: Date.now() }, // Generar un nuevo id único
      ]);
    }
    setIsFormOpen(false); // Cierra el formulario
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Lista de elementos</h1>
        <button
          onClick={handleInsert}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Insertar nuevo
        </button>
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm border hover:bg-gray-100 transition"
            >
              <div>
                <p className="font-medium text-gray-700">{item.name}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <button
                onClick={() => handleEdit(item)}
                className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Editar
              </button>
            </li>
          ))}
        </ul>
        {isFormOpen && (
          <div className="mt-6 p-6 border rounded-lg bg-gray-50 shadow-sm">
            <Form
              item={selectedItem}
              onSave={handleSave}
              onCancel={() => setIsFormOpen(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
