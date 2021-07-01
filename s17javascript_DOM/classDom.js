let killers = ["jason", "freddy", "chucky"]

var body = document.querySelector("body")
var ulList = document.createElement("ul")

body.appendChild(ulList)

var ulListSelection = document.querySelector("ul")

killers.forEach(element =>{
    let list = document.createElement("li")
    ulListSelection.appendChild(list).textContent = element
})
console.log(killers)