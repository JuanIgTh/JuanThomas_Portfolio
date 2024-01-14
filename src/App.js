import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Proyectos from './components/Proyectos';
import PaginaContacto from './components/PaginaContacto';

const App = () => {
  return (
    /* Uso de Router-Dom para la navegación entre páginas*/
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<PaginaContacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
