import React from 'react';
import { useViewportScroll, motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navegacion from './Componentes/Nav';
import NuestroProducto from './Componentes/NuestroProducto';
import NuestrosProyectos from './Componentes/NuestrosProyectos';
import Opiniones from './Componentes/Opiniones';
import Footer from './Componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import Galeria from './Componentes/Galeria';


const App  = () => {

  return (
    <div className="App">
      <Navegacion />
      <NuestroProducto />
      <NuestrosProyectos />
      <Galeria />
      <Opiniones />
      <Footer />
    </div>
  );
}

export default App;
