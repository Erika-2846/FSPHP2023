// Variables globales
let ticketsVendidos = {
    estudiante: 0,
    trainee: 0,
    junior: 0,
    general: 0
  };
  let precioFinal = 0;
  const valorTicket = 200;
  
  // Función para calcular el descuento y actualizar los tickets vendidos
  function calcularDescuento(valorTicket, categoria) {
    let descuento;
    switch (categoria) {
      case 'Estudiante':
        descuento = 0.8;
        ticketsVendidos.estudiante++;
        break;
      case 'Trainee':
        descuento = 0.5;
        ticketsVendidos.trainee++;
        break;
      case 'Junior':
        descuento = 0.15;
        ticketsVendidos.junior++;
        break;
      default:
        descuento = 0;
        ticketsVendidos.general++;
    }
    precioFinal = valorTicket - valorTicket * descuento;
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
  
    document.getElementById('Info').textContent = contenido;
    document.getElementById('total').textContent = `Total a Pagar: $${precioFinal}`;
  }
  
  // Función para mostrar el resumen de la compra
  function mostrarResumen() {
    const totalVendido = ticketsVendidos.estudiante + ticketsVendidos.trainee + ticketsVendidos.junior + ticketsVendidos.general;
    const totalRecaudado = totalVendido * valorTicket;
  
    const contenido = `Resumen:
  - Total de tickets vendidos: ${totalVendido}
  - Total recaudado: $${totalRecaudado}`;
  
    alert(contenido);
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
    const categoriaSelect = document.getElementById('categoria');
    const categoria = categoriaSelect.options[categoriaSelect.selectedIndex].text;
    calcularDescuento(valorTicket, categoria);
  }
  
  // Funciones de validación
  function validarNombre() {
    const nombre = document.getElementById('nombre');
    const errorNombre = document.getElementById('errorNombre');
    if (nombre.value.length < 3) {
      errorNombre.innerHTML = 'El nombre no es válido';
    } else {
      errorNombre.innerHTML = 'El nombre es válido';
    }
  }
  
  function validarApellido() {
    const apellido = document.getElementById('apellido');
    const errorApellido = document.getElementById('errorApellido');
    if (apellido.value.length < 3) {
      errorApellido.innerHTML = 'El apellido no es válido';
    } else {
      errorApellido.innerHTML = 'El apellido es válido';
    }
  }
  
  function validarEmail() {
    const email = document.getElementById('email');
    const errorEmail = document.getElementById('errorEmail');
    const expReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!expReg.test(email.value)) {
      errorEmail.innerHTML = 'El email no es válido';
    } else {
      errorEmail.innerHTML = 'El email es válido';
    }
  }
  
  // Event listeners
  document.addEventListener('DOMContentLoaded', function() {
    const botonComprar = document.getElementById('btnComprar');
    const botonBorrar = document.getElementById('btnBorrar');
    const botonResumen = document.getElementById('btnResumen');
    const email = document.getElementById('email');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
  
    botonResumen.addEventListener('click', validarNombre);
    botonResumen.addEventListener('click', validarApellido);
    botonResumen.addEventListener('click', validarEmail);
    botonComprar.addEventListener('click', compra);
    botonBorrar.addEventListener('click', borrarInformacion);
    email.addEventListener('keyup', validarEmail);
    nombre.addEventListener('keyup', validarNombre);
    apellido.addEventListener('keyup', validarApellido);
    botonResumen.addEventListener('click', mostrarResumen);
  });
  