

/*ejercicio 1: Comparar 2 strings, y determinar cuál de ambos es el más largo
input: "string 1", "some larger string"
output: "el string { string } es el más largo"*/
var cadenaUno = "familia Numerica"
var cadenaDos = "familia Alfamumerica"

if (cadenaUno > cadenaDos){
    console.log ("la cadena uno es mas larga")
}
else {
   console.log ("la cadena dos es la mas larga")
}

/*ejercicio 2: Crear un nuevo string
( deducir lo que se debe hacer con base en el input y el output )
input: "a very large string"
output: "A VeRy lArGe sTrInG"
input: "abcdefg"
output:"AbCdEfG"*/
var cadena1 = "ESTO ES UNA CADENA"
var cadena2 = cadena1.toLowerCase()
var cadena3 =
console.log (cadena2)

 



/*ejercicio 3: Crear un nuevo string
( deducir lo que se debe hacer con base en el input y el output )
input:"Kodemia"
output:"aimedoK"*/

function stringRev(str){
    
    var mensaje = "kodemia";
    for (var i = str.length - 1; i >=0; i--){
        mensaje = mensaje + str.charAt(i);
    }
    return alert (mensaje)
   
}

