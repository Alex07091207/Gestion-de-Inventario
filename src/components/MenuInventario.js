import React from 'react';
import { Link } from 'react-router-dom';

function MenuInventario() {
  return (
    <nav className="bg-blue-100 p-4 shadow-sm border-b flex gap-6 justify-center">
      <Link to="/ingresar" className="font-semibold text-blue-800 hover:text-blue-600">+ Ingresar</Link>
      <Link to="/listado" className="font-semibold text-blue-800 hover:text-blue-600">Ver Inventario</Link>
      <Link to="/carrito" className="font-semibold text-blue-800 hover:text-blue-600">🛒 Carrito</Link>
    </nav>
  );
}
export default MenuInventario;