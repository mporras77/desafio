// Variables
const numeroSecreto = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10
let numeroUsuario = 0; // Almacena el número ingresado por el usuario, inicializado en 0
let intentos = 0; // Contador de intentos, inicializado en 0
const maximosIntentos = 3; // Número máximo de intentos permitidos

// Bucle de juego: Continúa mientras el número ingresado no sea el número secreto y no se excedan los intentos máximos
while (numeroUsuario !== numeroSecreto && intentos < maximosIntentos) {
    // Solicita al usuario que ingrese un número y lo convierte a entero
    numeroUsuario = parseInt(prompt("Por favor, introduce un número entre 1 y 10:"));

    // Validación del número ingresado por el usuario
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 10) {
        // Si el número no es válido, muestra una alerta y continúa con el bucle
        alert("Debes introducir un número válido entre 1 y 10.");
        continue;
    }

    // Incrementa el contador de intentos
    intentos++;

    // Compara el número ingresado con el número secreto
    if (numeroUsuario === numeroSecreto) {
        // Si el número ingresado es igual al número secreto, muestra un mensaje de éxito
        document.getElementById('result-message').innerHTML = `
            <h1><span class="container__texto-azul">Correcto!</span></h1>
            <h2>Descubriste el número secreto en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}!</h2>
        `;
        break; // Sale del bucle
    } else if (numeroUsuario > numeroSecreto) {
        // Si el número ingresado es mayor que el número secreto, muestra una alerta
        alert('El número secreto es menor.');
    } else {
        // Si el número ingresado es menor que el número secreto, muestra una alerta
        alert('El número secreto es mayor.');
    }

    // Si se alcanza el máximo de intentos y no se ha encontrado el número secreto, muestra un mensaje de error
    if (intentos === maximosIntentos) {
        document.getElementById('result-message').innerHTML = `
            <h1><span class="container__texto-rojo">Error!</span></h1>
            <h2>Número no encontrado. Inténtalo nuevamente.</h2>
        `;
        break; // Sale del bucle
    }
}
