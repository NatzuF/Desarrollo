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