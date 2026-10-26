import React from 'react';
import { Link } from 'react-router-dom';
import './MenuInferior.css';

function MenuInferior() {
  return (
    <nav className="menu-inferior">
    <Link to="/">Home</Link>
    <Link to="/quienes-somos">Quiénes Somos</Link>
    <Link to="/tiendas">Nuestras Tiendas</Link>
    </nav>
);
}
export default MenuInferior;