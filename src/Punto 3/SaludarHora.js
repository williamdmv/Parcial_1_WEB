export function saludarSegunHora() {
    // Obtenemos los valores ingresados por el usuario
    var nombre = document.getElementById("nombre").value;
    var hora = parseInt(document.getElementById("hora").value);

    var mensaje = "";

    // Determinamos el saludo basado en la hora
    if (hora >= 0 && hora < 12) {
        mensaje = "Buenos días, " + nombre;
    } else if (hora >= 12 && hora < 18) {
        mensaje = "Buenas tardes, " + nombre;
    } else if (hora >= 18 && hora <= 23) {
        mensaje = "Buenas noches, " + nombre;
    } else {
        mensaje = "La hora ingresada no es válida.";
    }

    
    alert(mensaje);
}

// Suponiendo que tienes un botón en tu HTML, vinculamos la función al evento click
document.getElementById("botonSaludar").addEventListener("click", saludarSegunHora);
