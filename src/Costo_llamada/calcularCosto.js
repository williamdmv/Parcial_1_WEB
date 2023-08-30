const calcularCosto = (minutos) => {
    let costoTotal;

    if (minutos <= 3) {
        costoTotal = 100;
    } else {
        costoTotal = 100 + (minutos - 3) * 50;
    }

    console.log(`Costo calculado para ${minutos} minutos: ${costoTotal} pesos.`);

    return costoTotal;
};

export default calcularCosto;

document.getElementById('calcularBtn').addEventListener('click', function() {
    const minutosInput = document.getElementById('minutosInput').value;
    const coste = calcularCosto(parseInt(minutosInput, 10));
    document.getElementById('resultadoCosto').textContent = `Total a pagar: ${coste} pesos`;
});

