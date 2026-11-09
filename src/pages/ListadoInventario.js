import React, { useContext, useState } from 'react';
import { InventarioContext } from '../context/InventarioContext';

function ListadoInventario() {
  const { articulos, modificarCarrito } = useContext(InventarioContext);
  const [filtro, setFiltro] = useState('');
  const [modalArticulo, setModalArticulo] = useState(null);

  // Filtro dinámico sin alterar el estado original
  const articulosFiltrados = filtro 
    ? articulos.filter(art => art.tipo === filtro) 
    : articulos;

  const handleAgregar = (id) => {
    modificarCarrito(id, 'sumar');
    setModalArticulo(null);
    alert('Agregado al carrito');
  };

  return (
    <div className="p-8 pb-24 relative">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Inventario</h2>
      
      <div className="mb-6 max-w-xs mx-auto">
        <select onChange={(e) => setFiltro(e.target.value)} value={filtro} className="w-full border p-2 rounded shadow-sm">
          <option value="">Todos los tipos</option>
          <option value="Abarrotes">Abarrotes</option>
          <option value="Lácteos">Lácteos</option>
          <option value="Limpieza">Limpieza</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articulosFiltrados.map((art) => (
          <div key={art.id} onClick={() => setModalArticulo(art)} className="bg-white p-4 rounded shadow border cursor-pointer hover:bg-blue-50 transition">
            <h3 className="font-bold text-lg">{art.nombre}</h3>
            <p className="text-gray-600">{art.tipo}</p>
            <p className="text-sm mt-2 font-semibold text-blue-600">Stock: {art.cantidad}</p>
          </div>
        ))}
      </div>

      {/* Modal de Detalles */}
      {modalArticulo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full text-left">
            <h3 className="text-2xl font-bold mb-2">{modalArticulo.nombre}</h3>
            <p><strong>Marca:</strong> {modalArticulo.marca}</p>
            <p><strong>Categoría:</strong> {modalArticulo.tipo}</p>
            <p className="mb-4"><strong>Disponibles:</strong> {modalArticulo.cantidad}</p>
            
            <div className="flex gap-2">
              <button 
                onClick={() => handleAgregar(modalArticulo.id)} 
                disabled={modalArticulo.cantidad === 0}
                className="bg-green-600 text-white px-4 py-2 rounded w-full disabled:bg-gray-400">
                {modalArticulo.cantidad > 0 ? 'Agregar al Carrito' : 'Sin Stock'}
              </button>
              <button onClick={() => setModalArticulo(null)} className="bg-red-500 text-white px-4 py-2 rounded">Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ListadoInventario;

