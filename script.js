function actualizarTabla() {
    
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const numero = document.getElementById("numero").value;
    const edad = document.getElementById("edad").value;
    const direccion = document.getElementById("direccion").value;
    const codigopostal = document.getElementById("codigopostal").value;
    const provincia = document.getElementById("province").value;
    
    // radio
    const contacto = document.querySelector('input[name="Contacto"]:checked').nextElementSibling.innerText;
    
    // checkboxes
    const suscripciones = Array.from(document.querySelectorAll('input[name="subscripcion"]:checked'))
                               .map(s => s.nextElementSibling.innerText)
                               .join(", ");
    
    // Tabla
    document.getElementById("tabla-nombre").innerText = nombre;
    document.getElementById("tabla-apellido").innerText = apellido;
    document.getElementById("tabla-email").innerText = email;
    document.getElementById("tabla-telefono").innerText = numero;
    document.getElementById("tabla-edad").innerText = edad;
    document.getElementById("tabla-direccion").innerText = direccion;
    document.getElementById("tabla-codigopostal").innerText = codigopostal;
    document.getElementById("tabla-provincia").innerText = provincia;
    document.getElementById("tabla-contacto").innerText = contacto;
    document.getElementById("tabla-suscripcion").innerText = suscripciones;
}

document.querySelectorAll(".campo").forEach(campo => {
    campo.addEventListener("input", actualizarTabla);
});

// Para radio
document.querySelectorAll('input[name="Contacto"]').forEach(radio => {
    radio.addEventListener("change", actualizarTabla);
});

// Para checkbox
document.querySelectorAll('input[name="subscripcion"]').forEach(checkbox => {
    checkbox.addEventListener("change", actualizarTabla);
});

// leer más 

const botonLeerMas = document.getElementById("boton-leer-mas");
const textoAdicional = document.getElementById("texto-adicional");

botonLeerMas.addEventListener("click", () => {
    if (textoAdicional.style.display === "none") {
        textoAdicional.style.display = "inline";
        botonLeerMas.textContent = "Leer menos";
    } else {
        textoAdicional.style.display = "none";
        botonLeerMas.textContent = "Leer más";
    }
});