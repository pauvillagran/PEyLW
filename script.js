const formulario = document.querySelector('.formulario-contacto');
const tablaResultados = document.querySelector('.tabla-resultados tbody');

formulario.addEventListener('submit', (evento) => {

    evento.preventDefault();

    const datos = {
        apellido: document.getElementById('apellido').value,
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('numero').value,
        edad: document.getElementById('edad').value,
        direccion: document.getElementById('direccion').value,
        provincia: document.getElementById('province').value,
        codigoPostal: document.getElementById('codigopostal').value,
        contacto: document.querySelector('input[name="Contacto"]:checked').nextElementSibling.textContent,
        suscripcion: obtenerSuscripciones() 
    };

    actualizarTabla(datos);
});

function obtenerSuscripciones() {
    const checkboxes = document.querySelectorAll('input[name="subscripcion"]:checked');
    const seleccionados = Array.from(checkboxes).map(checkbox => checkbox.nextElementSibling.textContent);
    return seleccionados.join(', ') || 'Ninguna';
}

function actualizarTabla(datos) {

    document.getElementById('tabla-apellido').textContent = datos.apellido || 'No ingresado';
    document.getElementById('tabla-nombre').textContent = datos.nombre || 'No ingresado';
    document.getElementById('tabla-email').textContent = datos.email || 'No ingresado';
    document.getElementById('tabla-telefono').textContent = datos.telefono || 'No ingresado';
    document.getElementById('tabla-edad').textContent = datos.edad || 'No ingresado';
    document.getElementById('tabla-direccion').textContent = datos.direccion || 'No ingresado';
    document.getElementById('tabla-provincia').textContent = datos.provincia || 'No ingresado';
    document.getElementById('tabla-codigopostal').textContent = datos.codigoPostal || 'No ingresado';
    document.getElementById('tabla-contacto').textContent = datos.contacto || 'No especificado';
    document.getElementById('tabla-suscripcion').textContent = datos.suscripcion;
}