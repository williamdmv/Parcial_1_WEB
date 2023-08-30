import React from 'react';
import './Estilos.css';
import './calcularCosto.js';

function CostoLlamadaConverter() {
    return (
        <div className="llamada-converter">
            <input
                type="number"
                id="minutosInput"
                placeholder="Introduce minutos"
            />
            <button id="calcularBtn">Calcular</button>
            <div id="resultadoCosto"></div>
        </div>
    );
}

export default CostoLlamadaConverter;


