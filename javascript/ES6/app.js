// const arr = [1,2,3,4,5,6];

// const div = document.querySelector("div")
// // const h1 = document.querySelector("h1")

// arr.map(function(n,i){
//     console.log(n);
//     const h1 = document.createElement("h1")
//     h1.appendChild(document.createTextNode(n))
//     div.appendChild(h1)
// })

// const addSum = () => {
//     console.log('first')
// }
// addSum()

// const add = (q) => console.log('first',q)

// add('ww')

// const obj = {
//   name: "immu",
//   age: 21,
// };

// const {  age,name } = obj;

// console.log(age,name);

// const arr = [1,2,3,4]

// const [first, second, third] = arr

// console.log(third)

// const arr1 = [1,2,3,4,5,6]
// const arr2 = [7,8,9,10]

// console.log(...arr1, ...arr2)

// function orderBiriyani(callback){
//     console.log("Ordering Biriyani..");
//     setTimeout(() => {
//         console.log("Biriyani is ready...");
//         callback();
//     }, 2000)
// }

// function eatBiriyani(){
//     console.log("Ready to eat")
// }

// orderBiriyani(eatBiriyani)

// const phoneOrder = new Promise((resolve, reject)=> {
//     let isDelivered = true;
//     if(isDelivered){
//         resolve("Phone delivered")
//     }else{
//         reject("Delivered failed")
//     }
// })

// phoneOrder.then((msg) => {
//     console.log(msg)
// }).catch((err) => {
//     console.error(err)
// })

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach(user => {
//         console.log(user.name)
//     })
//   })
//   .catch((err) => console.error("pls check"));


const fetchData = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/user");
        const users = await res.json()
        console.log(users)
        users.map(user => {
            console.log(user.name)
        })
    } catch (error) {
        console.log(error)
    }
}

fetchData()