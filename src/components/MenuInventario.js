import React from 'react';
import { Link } from 'react-router-dom';

function MenuInventario() {
  return (
    <nav className="bg-blue-100 p-4 shadow-sm border-b flex gap-6 justify-center">
      <Link to="/ingresar" className="font-semibold text-blue-800 hover:text-blue-600 transition-colors">
        + Ingresar Artículo
      </Link>
      <Link to="/listado" className="font-semibold text-blue-800 hover:text-blue-600 transition-colors">
        Ver Inventario
      </Link>
    </nav>
  );
}

export default MenuInventario;