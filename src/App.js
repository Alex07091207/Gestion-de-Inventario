import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import NuestrasTiendas from './pages/NuestrasTiendas';
import MenuInferior from './components/MenuInferior';

function App() {
  return (
    <Router>
      <div style={{ paddingBottom: '60px', textAlign: 'center' }}>
        <h1>Gestión de Inventario</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/tiendas" element={<NuestrasTiendas />} />
        </Routes>
        <MenuInferior />
      </div>
    </Router>
  );
}

export default App;