import React from 'react';
import './SaludarHora.js';

function Saludador() {
  return (
    <div>
      <input type="text" id="nombre" placeholder="Introduce tu nombre" />
      <input type="number" id="hora" placeholder="Introduce la hora (0-23)" />
      <button id="botonSaludar">Saludar</button>
    </div>
  );
}

export default Saludador;
