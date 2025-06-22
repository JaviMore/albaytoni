// Función para obtener y mostrar el nombre de la URL
function mostrarNombre() {
    // Obtenemos la URL actual (esto es solo un ejemplo)
    const url = window.location.href;
    
    // Extraemos la parte que nos interesa
    const partes = url.split('/');
    const nombreCompleto = partes[partes.length - 1]; // Última parte después de la '/'
    
    // Separamos el nombre en caso de que haya un guion
    const nombres = nombreCompleto.split('-');
    
    // Unimos los nombres con un espacio
    const nombre = nombres.join(' ');
    
    // Mostramos el nombre en la página
    document.getElementById('nombre').textContent = nombre;
}

// Llamamos a la función cuando la página carga
window.onload = mostrarNombre;