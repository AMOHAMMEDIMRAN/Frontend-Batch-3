

// let i;

// for(i = 0; i<=5; i++){
//     if(i === 3){
//         console.log("This is my fav num")
        
//     }

//     if(i === 5){
//         console.log("This is last num")
        
//     }
//     console.log(i)
// }
 const name = document.getElementById("name")

const users = ["Imran", "Prakash", "Aadhi", "Sahin"]

users.forEach(function(user, i){
    console.log(`Name: ${user} ${i}`)
   
})