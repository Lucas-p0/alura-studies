import React from 'react';
import './style.scss'
import Lista from '../components/Lista';
import Formulario from "../components/Formulario"

function App() {
  return (
    <div className="AppStyle">
      <Formulario />
      <Lista/>
    </div>
  );
}

export default App;
