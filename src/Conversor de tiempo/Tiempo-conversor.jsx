
import './Estilos.css';
import React, { useEffect } from 'react';
/*Opte por usar el useEffect ya que estaba teniendo problemas con el addEventListener, me sucedia cuando queria mostrar con Router otro componente en App.js*/
import { convertirSegundos } from './convertirSegundos.js';




function TiempoConverter() {
    useEffect(() => {
        const boton = document.getElementById('convertirBtn');
        boton.addEventListener('click', function() {
          const segundosInput = document.getElementById('segundosInput').value;
          const conversion = convertirSegundos(parseInt(segundosInput, 10));
          document.getElementById('resultado').textContent = conversion;
        });
      }, []);


  return (
    <div className="tiempo-converter">
      <input
        type="number"
        id="segundosInput"
        placeholder="Introduce segundos"
      />
      <button id="convertirBtn">Convertir</button>
      <div id="resultado"></div>
    </div>
  );
}

export default TiempoConverter;
