import React, { useContext } from 'react';
import { InventarioContext } from '../context/InventarioContext';

function Carrito() {
  const { carrito, modificarCarrito } = useContext(InventarioContext);

  return (
    <div className="p-8 pb-24">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">Carrito de Compras</h2>
    
    {carrito.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío.</p>
    ) : (
        <div className="max-w-2xl mx-auto flex flex-col gap-4">
        {carrito.map(item => (
            <div key={item.id} className="bg-white p-4 rounded shadow border flex justify-between items-center">
            <div className="text-left">
                <h3 className="font-bold text-lg">{item.nombre}</h3>
                <p className="text-sm text-gray-600">{item.marca}</p>
            </div>
            
            <div className="flex items-center gap-4">
                <button onClick={() => modificarCarrito(item.id, 'restar')} className="bg-red-500 text-white w-8 h-8 rounded font-bold">-</button>
                <span className="font-bold text-lg w-4 text-center">{item.cantidadCarrito}</span>
                <button onClick={() => modificarCarrito(item.id, 'sumar')} className="bg-blue-500 text-white w-8 h-8 rounded font-bold">+</button>
            </div>
            </div>
        ))}
        </div>
    )}
    </div>
);
}
export default Carrito; 