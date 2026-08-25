function mostrarAlerta() {
    let nombreInput = document.getElementById("nombre").value;
    let apellidoInput = document.getElementById("apellido").value;
    let cuentaInput = document.getElementById("cuenta").value;

    if(nombreInput === "" || apellidoInput === "" || cuentaInput === "") {
        alert("Por favor, llenar correctamente los campos.");
        return;
    }

    let mensaje = "¡Hola " + nombreInput + " " + apellidoInput + "! Te regalo al gordo:";

    document.getElementById('mensaje-alerta').innerHTML = mensaje;
    document.getElementById('alerta-gato').style.display = 'block';

    let sonidogato = new Audio('sonido/ronrroneo.mp3');
    sonidogato.play();
}