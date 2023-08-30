export function convertirSegundos(segundos) {
    console.log(`Segundos ingresados: ${segundos}`);

    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    if (horas > 0) {
        console.log(`Resultado: ${horas} horas : ${minutos} minutos : ${segundosRestantes} segundos`);
        return `${horas} horas : ${minutos} minutos : ${segundosRestantes} segundos`;
    } else if (minutos > 0) {
        console.log(`Resultado: ${minutos} minutos : ${segundosRestantes} segundos`);
        return `${minutos} minutos : ${segundosRestantes} segundos`;
    } else {
        console.log(`Resultado: ${segundosRestantes} segundos`);
        return `${segundosRestantes} segundos`;
    }
}

  
  
  