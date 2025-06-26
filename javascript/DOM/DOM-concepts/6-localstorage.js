
const saveBtn = document.querySelector(".set");
const seeBtn = document.querySelector(".get");
const clearBtn = document.querySelector(".clear");
const result = document.querySelector(".result");


saveBtn.addEventListener("click", function(){
    const nameField = document.querySelector(".nameField").value;
    localStorage.setItem("user", nameField);
    alert("Name saved")
});

seeBtn.addEventListener("click", function(){
    const result = document.querySelector(".result");
    const name = localStorage.getItem("user");
    result.innerText = name ? `Hi ${name}` : "There is no user"
})

clearBtn.addEventListener("click", function(){
    localStorage.removeItem("user")
    const result = document.querySelector(".result");
    result.innerText = "There is no user"
})
