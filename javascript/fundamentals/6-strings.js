const firstName = "Mohammed";
const lastName = "Imran";
const age = 21;

let val;

val = firstName + lastName
val = firstName + " " + lastName

val = "Immu"

// val = val + "coder"
val += "coder"

val = firstName.length

val = firstName.concat(" " + lastName + " " + age)

val = firstName.toUpperCase()
val = firstName.toLowerCase()

val = firstName[1]

val = firstName.charAt(0)



// slice

val = firstName.slice(1,5)

const para = " Hello i am, Mohammed Imran and, i am web dev"

val = para.split(",")

val = para.replace("Imran", "Immu")

val = para.includes("web")

console.log(val)