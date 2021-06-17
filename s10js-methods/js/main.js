let nombre = prompt ("nombre");
let apellidos = prompt("apellidos");
 
function convertirNombre (nombre, apellidos){
    let nombreTransformado = nombre.toLowerCase>();
    let apellidosTransformados = apellidos.toUpperCase();
    var nombreCompleto = nombreTransformado + " " +apellidosTransformados;
    return nombreCompleto;
}
console.log (nombreCompleto);