const Unico_socio = 21524
let usuarioLogueado = false;

let nombre_unico= "Pedro Gonzalez";
let nombre_documento= " 30982223";

function ingresarComoSocio (){
let numeroSocio= prompt ("Ingresa tu numero de socio:") ;
if (numeroSocio== Unico_socio ){

    saludar()
usuarioLogueado = true;
opcionesLogueado (nombre_unico,nombre_documento,Unico_socio)
} else {
    alert(" Numero de socio incorrecto");
}
}

while (!usuarioLogueado) {
let ingreso = prompt (
    "Seleccione una opcion 1-Socio 2-Hacerse Socio"
); 

if ( ingreso =="1") {
ingresarComoSocio();

} else if ( ingreso =="2"){
    hacerseSocio ();
}
}
function saludar (){
    console.log ("San Lorenzo, tu Club");
}
function hacerseSocio (){
    let nombre = prompt ("Ingrese su nombre y apellido");
    let documento = prompt ("Ingrese su documento");
    let nuevo_socio = 12345;
    alert( "Registrado con exito, su numero de socio es " + nuevo_socio);
    usuarioLogueado = true; 
    opcionesLogueado (nombre,documento,nuevo_socio) 
}
function opcionesLogueado (nombre,documento,numeroSocio){
    let opcion = prompt ( "1-Ver mis datos 2-Cerrar sesion");

    if (opcion ==1) {
        alert("Nombre: " + nombre + " Documento: " + documento + " Número de socio: " + numeroSocio);
    }
    else if (opcion ==2){
        usuarioLogueado= false
    alert ("sesion cerrada");}
    
    else { 
        alert ("opcion invalida");
    };
}   

