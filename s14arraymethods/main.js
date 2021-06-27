
 /*agrupar únicamente los nombres de las bandas, sin repeticiones*/
/*
  Agrupar las canciones de cada banda
*/
/*
  saber cuál es la canción con más likes
  ( nombre de la canción y nombre de la banda)
  */
/*saber cuál es la canción con más reproducciones
( nombre de la canción y nombre de la banda)
*/


let songsData = [
    {
      name: "Kashmir",
      band: "Led Zeppelin",
      releaseYear: "1980",
      statistics: {
        likes: 20000,
        reproductions: 8000,
      }
    },
    {
      name: "Smells Like Teen Spirit",
      band: "Nirvana",
      releaseYear: "1989",
      statistics: {
        likes: 25000,
        reproductions: 100000,
      }
    }, {
      name: "So What",
      band: "Metallica",
      releaseYear: "1990",
      statistics: {
        likes: 12000,
        reproductions: 95000,
      }
    }, {
      name: "Nothing Else Matters",
      band: "Metallica",
      releaseYear: "1992",
      statistics: {
        likes: 128000,
        reproductions: 915000,
      }
    }, {
      name: "Daze",
      band: "Poets of the Fall",
      releaseYear: "2014",
      statistics: {
        likes: 3548413,
        reproductions: 87095138,
      }
    }, {
      name: "The Sweet Scape",
      band: "Poets of the fall",
      releaseYear: "2018",
      statistics: {
        likes: 26268856,
        reproductions: 2424568,
      }
    }
  ]
 console.log(songsData[5],)

/*ejercicio de prueba, como acceder a los 
elementos de un arreglo*/
/*
const numeros = [10,20,30,40,50,60,70,80,90,[1,2,3,]]
console.log(numeros)
console.table(numeros)
console.log(numeros[5])
console.log(numeros[9])*/