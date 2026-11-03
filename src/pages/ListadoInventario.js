import React, { useContext } from 'react';
import { InventarioContext } from '../context/InventarioContext';

function ListadoInventario() {
  const { articulos } = useContext(InventarioContext);

  return (
    <div className="p-8 pb-24">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Inventario Actual</h2>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white text-left">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 font-semibold uppercase">Nombre</th>
              <th className="py-3 px-4 font-semibold uppercase">Marca</th>
              <th className="py-3 px-4 font-semibold uppercase">Tipo de Producto</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {articulos.map((art, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{art.nombre}</td>
                <td className="py-3 px-4">{art.marca}</td>
                <td className="py-3 px-4">{art.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {articulos.length === 0 && (
        <p className="mt-6 text-gray-500 font-medium">No hay artículos registrados en el inventario.</p>
      )}
    </div>
  );
}

export default ListadoInventario;