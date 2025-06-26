// console.log("Hello")


const container = document.getElementsByClassName("container")
const ul = document.getElementById("group")
const li = document.querySelector(".collection-item")
const input = document.querySelector("#text-field").value

li.style.color = "black"
// li.style.backgroundColor = "blue"
li.style.padding = "30px"

const password = 1

if(password <= 5){
    li.style.backgroundColor = "red"
}
else if(password <= 10){
    li.style.backgroundColor = "orange"
}
else if(password >= 14){
    li.style.backgroundColor = "green"
}

console.log(ul)