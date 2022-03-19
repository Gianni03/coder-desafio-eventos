// (Function() {
const formulario = document.getElementById('formulario')
const nombre = formulario.nombre
const correo = formulario.correo
const sexo = formulario.sexo
const terminos = formulario.terminos
const error = document.getElementById('error')

function validarNombre(e) {
    if (nombre.value == '' || nombre.value == null) {
        console.log('Falta nombre');
        error.style.display = 'block';
        error.innerHTML += '<li>Falta nombre</li>';
        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

function validarCorreo(e) {
    if (correo.value == '' || correo.value == null) {
        console.log('Falta correo');
        error.style.display = 'block';
        error.innerHTML += '<li>Falta Correo</li>';
        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

function validarSexo(e) {
    if (sexo.value == '' || sexo.value == null) {
        console.log('Falta sexo');
        error.style.display = 'block';
        error.innerHTML += '<li>Falta sexo</li>';
        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

function validarTerminos(e) {
    if (terminos.checked == false || terminos.value == null) {
        console.log('Faltan terminos');
        error.style.display = 'block';
        error.innerHTML += '<li>Faltan terminos</li>';
        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

function validarFormulario(e) {
    error.innerHTML = '';
    validarNombre(e);
    validarCorreo(e);
    validarSexo(e);
    validarTerminos(e)

}

formulario.addEventListener('submit', validarFormulario);
// })