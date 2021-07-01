/*para crear objetos del tipo Mentor, que contengan el nombre y apellidos del mentor, 
una propiedad con sus inciales y un método que al ser invocado 
devuelva el string "hola, soy {nombre} {apellidos}"
los objetos deben estar dentro de una colección llamada mentorsArray
*/

let dataArray = [
    [
        "Israel",
        "Salinas Martinez"
    ],
    [
        "David",
        "Cermeño Monrachel"
    ],
    [
        "Charles",
        "Silva"
    ],
    [
        "Michael",
        "Villalba Sotelo"
    ]
]
function Mentor (name, lasname){
    this.name = name 
    this.lasname = lasname
    this.initials = (name + " " + lasname)
          .split(" ")
          .reduce( ( acum, item)=> acum + item.charAt(0).toUpperCase() + ". ").strim()
    this.message = x => {
        return ("hola, soy" + this.name + " " + this.lastname) 
    }   
 } 
let personOne = new Mentor ("Michael" , "Villalba Sotelo") 
console.log(personOne)
console.log(personOne.message())


const arrayObjects = array => {
    let mentorsArray = []
    mentorsArray = array.reduce ((acum, item) =>
    {
        let objectmentor = new Mentor ((item [0], tem[1])
          return [...acum, objectmentor]
    } , [] )
        
    console.log(arrayObjects(dataArray))
}
/*
let dataArray = [
    [
        "Israel",
        "Salinas Martinez",
        "HTML:9",
        "CSS:8",
        "JS:7"
    ],
    [
        "David",
        "Cermeño Monrachel",
        "HTML:9",
        "CSS:8",
        "JS:9"
    ],
    [
        "Charles",
        "Silva",
        "HTML:8",
        "CSS:8",
        "JS:10"
    ],
    [
        "Michael",
        "Villalba Sotelo",
        "HTML:9",
        "CSS:10",
        "JS:7"
    ]
]
funtion Mentor (name,lastName, html, css, js){
    this.name = name 
    this.lastname = lastName
    this.html = sanitizar(html)
    this.css = sanitizar (css)
    this.js = sanitizar (js)
    this.abbr = createAbbr(this.name,this.lasName)
    function createAbbr(name,lastName){
        let fullName = name.strim()+" "+lastName.trim()
        return fullName.split(" ").reduce((accum,item,index,arr) => (index!=arr.length))
    }
    function sanitizar ( string){
        let sanitizada = [...string].reduce(accum, item)=>{
            return (!isNaN(parseInt(item)))?accum + item:accum;}

            
        }
    }
}