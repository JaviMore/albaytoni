// Función para obtener y mostrar los nombres de la URL
function mostrarNombre() {
    // Obtenemos la URL actual
    const url = window.location.href;
    
    // Usamos URLSearchParams para obtener los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    
    // Obtenemos el valor del parámetro (en este caso, lo que sigue a '?')
    const nombreCompleto = urlParams.get('invitados'); // obtenemos el valor sin nombre de parámetro

    // Si no hay un valor, regresamos
    if (!nombreCompleto) return;
    
    // Separamos los nombres con el guion
    const nombres = nombreCompleto.split('-');
    
    // Unimos los nombres con un espacio
    const nombre = nombres.join(' ');
    
    // Mostramos el nombre en la página
    document.getElementById('nombre').textContent = nombre;
}

// Llamamos a la función cuando la página carga
window.onload = mostrarNombre;
