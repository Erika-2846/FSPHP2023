// Variables globales
let ticketsVendidos = {
  estudiante: 0,
  trainee: 0,
  junior: 0,
  general: 0
};
let precioFinal = 0;
const valorTicket = 200;
let informacionCompra = ''; // Variable para almacenar la información de la compra

// Función para calcular el descuento y actualizar los tickets vendidos
function calcularDescuento(valorTicket, cantEntradas) {
  const categoriaSelect = document.getElementById('categoria');
  const categoria = categoriaSelect.value;
  let descuento;

  switch (categoria) {
    case '1': // Estudiante
      descuento = 80;
      ticketsVendidos.estudiante += parseInt(cantEntradas);
      break;
    case '2': // Trainee
      descuento = 50;
      ticketsVendidos.trainee += parseInt(cantEntradas);
      break;
    case '3': // Junior
      descuento = 15;
      ticketsVendidos.junior += parseInt(cantEntradas);
      break;
    default:
      descuento = 0; // General
      ticketsVendidos.general += parseInt(cantEntradas);
  }

  precioFinal = valorTicket * (100 - descuento) / 100 * parseInt(cantEntradas);
  actualizarPantalla();
}

// Función para actualizar la información en la pantalla
function actualizarPantalla() {
  const contenido = `Tickets vendidos:
  - Estudiantes: ${ticketsVendidos.estudiante}
  - Trainees: ${ticketsVendidos.trainee}
  - Juniors: ${ticketsVendidos.junior}
  - General: ${ticketsVendidos.general}
  
  Precio final: $${precioFinal}`;

  informacionCompra = contenido; // Almacenar el contenido en la variable informacionCompra

  document.getElementById('Info').textContent = contenido;
  document.getElementById('total').textContent = `Total a Pagar: $${precioFinal}`;
}

// Función para mostrar el resumen de la compra
function mostrarResumen(event) {
  const totalVendido = ticketsVendidos.estudiante + ticketsVendidos.trainee + ticketsVendidos.junior + ticketsVendidos.general;
  const totalRecaudado = totalVendido * valorTicket;

  const contenido = `Resumen:
  - Total de tickets vendidos: ${totalVendido}
  - Total recaudado: $${totalRecaudado}

${informacionCompra}`; // Agregar el contenido de Info al resumen de la compra

  console.log(contenido); // Imprimir el resumen en la consola en lugar de mostrar un alert
  event.preventDefault();
  compra();
}

// Función para borrar la información de la compra
function borrarInformacion() {
  ticketsVendidos = {
    estudiante: 0,
    trainee: 0,
    junior: 0,
    general: 0
  };
  precioFinal = 0;
  actualizarPantalla();
}

// Función para realizar la compra
function compra() {
  const nombre = document.getElementById('nombre');
  const apellido = document.getElementById('apellido');
  const email = document.getElementById('email');
  const cantEntradas = document.getElementById('cantEntradas').value;

  if (!validarNombre() || !validarApellido() || !validarEmail()) {
    return; // Detener la compra si hay errores de validación
  }

  const categoriaSelect = document.getElementById('categoria');
  const categoria = categoriaSelect.value;

 // Validar si se ha seleccionado una categoría
 if (categoriaSelect.selectedIndex === 0) {
  alert('Por favor, seleccione una categoría');
  return;
}

  calcularDescuento(valorTicket, cantEntradas);
}

// Funciones de validación

function validarNombre() {
  const nombre = document.getElementById('nombre').value.trim();
  const errorNombre = document.getElementById('errorNombre');
  if (nombre === '') {
    errorNombre.textContent = 'Por favor, ingrese su nombre';
    errorNombre.classList.remove('oculto');
    return false;
  } else if (nombre.length < 3) {
    errorNombre.textContent = 'El nombre debe tener al menos 3 caracteres';
    errorNombre.classList.remove('oculto');
    return false;
  } else {
    errorNombre.classList.add('oculto');
    return true;
  }
}

function validarApellido() {
  const apellido = document.getElementById('apellido').value.trim();
  const errorApellido = document.getElementById('errorApellido');
  if (apellido === '') {
    errorApellido.textContent = 'Por favor, ingrese su apellido';
    errorApellido.classList.remove('oculto');
    return false;
  } else if (apellido.length < 3) {
    errorApellido.textContent = 'El apellido debe tener al menos 3 caracteres';
    errorApellido.classList.remove('oculto');
    return false;
  } else {
    errorApellido.classList.add('oculto');
    return true;
  }
}

function validarEmail() {
  const email = document.getElementById('email').value.trim();
  const errorEmail = document.getElementById('errorEmail');
  const regexEmail = /\S+@\S+\.\S+/;

  if (email === '') {
    errorEmail.textContent = 'Por favor, ingrese su correo electrónico';
    errorEmail.classList.remove('oculto');
    return false;
  } else if (!regexEmail.test(email)) {
    errorEmail.textContent = 'Por favor, ingrese un correo electrónico válido';
    errorEmail.classList.remove('oculto');
    return false;
  } else {
    errorEmail.classList.add('oculto');
    return true;
  }
}

// Event listeners
document.getElementById('btnResumen').addEventListener('click', mostrarResumen);
