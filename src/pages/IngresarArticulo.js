import React, { useState, useContext } from 'react';
import { InventarioContext } from '../context/InventarioContext';

function IngresarArticulo() {
  const { agregarArticulo } = useContext(InventarioContext);
  const [formulario, setFormulario] = useState({ nombre: '', marca: '', tipo: '' });

  const manejarCambio = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    agregarArticulo(formulario);
    setFormulario({ nombre: '', marca: '', tipo: '' });
    alert('Artículo ingresado correctamente');
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Ingresar Nuevo Artículo</h2>
      <form onSubmit={manejarEnvio} className="flex flex-col gap-4 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md border">
        <input name="nombre" value={formulario.nombre} onChange={manejarCambio} placeholder="Nombre del producto" className="border p-2 rounded focus:outline-none focus:border-blue-500" required />
        <input name="marca" value={formulario.marca} onChange={manejarCambio} placeholder="Marca" className="border p-2 rounded focus:outline-none focus:border-blue-500" required />
        <select name="tipo" value={formulario.tipo} onChange={manejarCambio} className="border p-2 rounded focus:outline-none focus:border-blue-500" required>
          <option value="">Seleccione el tipo de producto...</option>
          <option value="Abarrotes">Abarrotes</option>
          <option value="Lácteos">Lácteos</option>
          <option value="Limpieza">Limpieza</option>
          <option value="Electrónica">Electrónica</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
          Guardar Artículo
        </button>
      </form>
    </div>
  );
}

export default IngresarArticulo;