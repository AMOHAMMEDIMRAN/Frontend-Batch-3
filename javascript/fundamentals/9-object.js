const user = {
    username: "Immu",
    email: "immu@gmail.com",
    age: 21,
    phoneNo: 9092598581,
    hobbies: ['Reading', 'Coding'],
    address: {
        city: "Py",
        pincode: 605110
    }
}

let val;

val = user.hobbies[0]
val = user.age
val = user.name
val = user["username"]
val = user.address.pincode

console.log(val)