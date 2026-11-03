import React, { createContext, useState } from 'react';

export const InventarioContext = createContext();

export const InventarioProvider = ({ children }) => {
  const [articulos, setArticulos] = useState([]);

  const agregarArticulo = (nuevoArticulo) => {
    setArticulos([...articulos, nuevoArticulo]);
  };

  return (
    <InventarioContext.Provider value={{ articulos, agregarArticulo }}>
      {children}
    </InventarioContext.Provider>
  );
};