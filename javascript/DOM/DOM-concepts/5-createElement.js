// console.log("hello")


const ul = document.createElement("ul")

const li = document.createElement("li")

const box = document.querySelector(".box")

li.className = "hello"
// li.innerHTML = `<span>hello</span>`

li.innerText = "hi"

ul.appendChild(li)
box.appendChild(ul)

// console.log(ul)
console.log(ul)