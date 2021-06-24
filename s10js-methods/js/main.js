

var nombre = prompt("nombre:")
var apellidos = prompt("apellidos:")
//var nombreCompleto = (nombre + apellidos)

function convertirNombre (nombre, apellidos){
    var nombreTranformado = nombre.toLowerCase()
    var apellidosTransformados = apellidos.toUpperCase()
    var nombreCompleto = nombreTranformado + " " +apellidosTransformados
    return nombreCompleto
}



//ubaconsole.log(nombreCompelto)



