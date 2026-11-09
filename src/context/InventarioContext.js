import React, { createContext, useState } from 'react';

export const InventarioContext = createContext();

export const InventarioProvider = ({ children }) => {
  const [articulos, setArticulos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  // Se agrega un ID único (Date.now()) para rastrear cada artículo con precisión
  const agregarArticulo = (nuevoArticulo) => {
    setArticulos([...articulos, { ...nuevoArticulo, id: Date.now(), cantidad: Number(nuevoArticulo.cantidad) }]);
  };

  const modificarCarrito = (articuloId, operacion) => {
    const articuloEnInventario = articulos.find(art => art.id === articuloId);
    const itemEnCarrito = carrito.find(item => item.id === articuloId);

    if (operacion === 'sumar' && articuloEnInventario.cantidad > 0) {
      // Restar 1 del inventario
      setArticulos(prev => prev.map(art => art.id === articuloId ? { ...art, cantidad: art.cantidad - 1 } : art));
      
      // Sumar 1 al carrito (o agregarlo si no existe)
      if (itemEnCarrito) {
        setCarrito(prev => prev.map(item => item.id === articuloId ? { ...item, cantidadCarrito: item.cantidadCarrito + 1 } : item));
      } else {
        setCarrito([...carrito, { ...articuloEnInventario, cantidadCarrito: 1 }]);
      }
    } else if (operacion === 'restar' && itemEnCarrito) {
      // Sumar 1 al inventario
      setArticulos(prev => prev.map(art => art.id === articuloId ? { ...art, cantidad: art.cantidad + 1 } : art));
      
      // Restar 1 del carrito (y eliminar si llega a 0)
      if (itemEnCarrito.cantidadCarrito === 1) {
        setCarrito(prev => prev.filter(item => item.id !== articuloId));
      } else {
        setCarrito(prev => prev.map(item => item.id === articuloId ? { ...item, cantidadCarrito: item.cantidadCarrito - 1 } : item));
      }
    }
  };

  return (
    <InventarioContext.Provider value={{ articulos, carrito, agregarArticulo, modificarCarrito }}>
      {children}
    </InventarioContext.Provider>
  );
};