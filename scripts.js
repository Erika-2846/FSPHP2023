    let ticketsVendidos = {
        estudiante: 0,
        trainee: 0,
        junior: 0,
        general: 0
    };
    let precioFinal = 0;
    let valorTicket = 200;

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

    function actualizarPantalla() {
        let contenido = `Tickets vendidos:\n`;
        contenido += `- Estudiantes: ${ticketsVendidos.estudiante}\n`;
        contenido += `- Trainees: ${ticketsVendidos.trainee}\n`;
        contenido += `- Juniors: ${ticketsVendidos.junior}\n`;
        contenido += `- General: ${ticketsVendidos.general}\n`;
        contenido += `\nPrecio final: $${precioFinal}`;
        document.getElementById('Info').textContent = contenido;
        document.getElementById('total').textContent = `Total a Pagar: $${precioFinal}`;
    }

    function mostrarResumen() {
        let totalVendido = ticketsVendidos.estudiante + ticketsVendidos.trainee + ticketsVendidos.junior + ticketsVendidos.general;
        let contenido = `Resumen:\n`;
        contenido += `- Total de tickets vendidos: ${totalVendido}\n`;
        contenido += `- Total recaudado: $${totalVendido * precioFinal}`;
        alert(contenido);
    }

    function borrarInformacion() {
        ticketsVendidos.estudiante = 0;
        ticketsVendidos.trainee = 0;
        ticketsVendidos.junior = 0;
        ticketsVendidos.general = 0;
        precioFinal = 0;
        actualizarPantalla();
    }

    function compra() {
        let categoriaSelect = document.getElementById('categoria');
        let categoria = categoriaSelect.options[categoriaSelect.selectedIndex].text;
        calcularDescuento(valorTicket, categoria);
    }

    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const botonComprar = document.getElementById('btnComprar');
    const botonBorrar = document.getElementById('btnBorrar');
    const botonResumen = document.getElementById('btnResumen');
    const email = document.getElementById('email');
    const expReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    function validarNombre() {
        if (nombre.value.length < 3) {
            document.getElementById('errorNombre').innerHTML = 'El nombre no es válido';
        } else {
            document.getElementById('errorNombre').innerHTML = 'El nombre es válido';
        }
    }

    function validarApellido() {
        if (apellido.value.length < 3) {
            document.getElementById('errorApellido').innerHTML = 'El apellido no es válido';
        } else {
            document.getElementById('errorApellido').innerHTML = 'El apellido es válido';
        }
    }

    function validarEmail() {
        if (!expReg.test(email.value)) {
            document.getElementById('errorEmail').innerHTML = 'El email no es válido';
        } else {
            document.getElementById('errorEmail').innerHTML = 'El email es válido';
        }
    }

    botonResumen.addEventListener('click', validarNombre);
    botonResumen.addEventListener('click', validarApellido);
    botonResumen.addEventListener('click', validarEmail);
    botonComprar.addEventListener('click', compra);
    botonBorrar.addEventListener('click', borrarInformacion);
    email.addEventListener('keyup', validarEmail);
    nombre.addEventListener('keyup', validarNombre);
    apellido.addEventListener('keyup', validarApellido);
    botonResumen.addEventListener('click', mostrarResumen);

    document.addEventListener('DOMContentLoaded', function() {

});
