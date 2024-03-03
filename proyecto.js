const Unico_socio = 21524
let usuarioLogueado = false;
let sociosRegistrados = [{
    nombre: "Pedro Gonzalez",
    documento: 30982223,
    numero: 21524
}];

function ingresarComoSocio (){
let numeroSocio= prompt ("Ingresa tu numero de socio:") ;
let socioEncontrado = sociosRegistrados.find(socio => socio.numero === parseInt(numeroSocio) );
if (socioEncontrado){

    saludar()
usuarioLogueado = true;
opcionesLogueado (socioEncontrado.nombre, socioEncontrado.documento, socioEncontrado.numero)
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
    alert("San Lorenzo, tu Club");
}
function hacerseSocio() {
    let nombre = prompt("Ingrese su nombre y apellido");
    let documento = prompt("Ingrese su documento");
    let nuevo_socio = {
        nombre: nombre,
        documento: documento,
        numero: Math.floor(Math.random() * (8000 - 1 + 1)) + 1    };
    sociosRegistrados.push(nuevo_socio); 
    alert("Registrado con exito, su numero de socio es " + nuevo_socio.numero);
    usuarioLogueado = true;
    opcionesLogueado(nuevo_socio.nombre, nuevo_socio.documento, nuevo_socio.numero);
}
function opcionesLogueado (nombre,documento,numeroSocio){
    let opcion = prompt ( "1-Ver mis datos 2-Cerrar sesion");

    if (opcion ==1) {
        alert("Nombre: " + nombre + " Documento: " + documento + " Número de socio: " + numeroSocio);
        mostrarSociosRegistrados ();
    }
    else if (opcion ==2){
        usuarioLogueado= false
    alert ("sesion cerrada");}
    
    else { 
        alert ("opcion invalida");
    };
}   

function mostrarSociosRegistrados (){
    let listaSocios = "socios registrados";
    sociosRegistrados.forEach(function(socio) {
        listaSocios += "Nombre: " + socio.nombre + ", Documento: " + socio.documento + ", Número de socio: " + socio.numero + "\n";
        
    });
    alert (listaSocios);
}
