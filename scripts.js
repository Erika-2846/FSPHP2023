console.log("eventos");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");


nombre.value = "Ricardo";

console.log(nombre.value.length);

apellido.value = "Contreras";
console.log(apellido.value.length);

function validarNombre(){
    if(nombre.value.length<3){

    }
}

function validarApellido(){
    if(apellido.value.length<3){

    }
}