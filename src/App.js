import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import NuestrasTiendas from './pages/NuestrasTiendas';
import IngresarArticulo from './pages/IngresarArticulo';
import ListadoInventario from './pages/ListadoInventario';
import MenuInferior from './components/MenuInferior';
import MenuInventario from './components/MenuInventario';
import Carrito from './pages/Carrito';
import { InventarioProvider } from './context/InventarioContext';

function App() {
  return (
    <InventarioProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 text-center relative">
          <MenuInventario />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/tiendas" element={<NuestrasTiendas />} />
            <Route path="/ingresar" element={<IngresarArticulo />} />
            <Route path="/listado" element={<ListadoInventario />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
          
          <MenuInferior />
        </div>
      </Router>
    </InventarioProvider>
  );
}

export default App;