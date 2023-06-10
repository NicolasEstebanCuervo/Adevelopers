import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import HeaderComponent from './Componentes/Header';
import SobreNosotros from './Componentes/SobreNosotros';
import NuestrosProyectos from './Componentes/NuestrosProyectos';
import NuestroTrabajo from './Componentes/NuestrosServicios';
import Contactanos from './Componentes/Contactanos';
import Footer from './Componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

const App  = () => {

  return (
    <div className="App">
      <HeaderComponent />
      <SobreNosotros />
      <NuestrosProyectos />
      <NuestroTrabajo />
      <Contactanos />
      <Footer />
    </div>
  );
}

export default App;
