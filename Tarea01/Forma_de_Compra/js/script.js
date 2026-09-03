function mostrarPestana(boton, idPestana) {
    let contenidos = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contenidos.length; i++) {
        contenidos[i].classList.remove("active");
    }

    let botones = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < botones.length; i++) {
        botones[i].classList.remove("active");
    }

    document.getElementById(idPestana).classList.add("active");
    boton.classList.remove("active");
}

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const lista = document.getElementById('lista-datos');

    if (Array.from(params).length === 0) {
        lista.innerHTML = '<li>No se recibieron datos. Por favor, llena el formulario primero</li>';
        return;
    }

    params.forEach((valor, clave) => {
        const li = document.createElement('li');
        const claveFormateada = clave.replace('_', ' ').toUpperCase();
        const valorFinal = valor.trim() !== '' ? valor : '<em>No especificado</em>';

        li.innerHTML = `<strong>${claveFormateada}:</strong> <span>${valorFinal}</span>`;
        lista.appendChild(li);
    });
});