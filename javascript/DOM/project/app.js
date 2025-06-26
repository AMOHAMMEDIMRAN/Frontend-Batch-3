const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector("#btn-clear");

loadEventListners();

function loadEventListners() {
  form.addEventListener("submit", addTask);
  document.addEventListener("DOMContentLoaded", getTasks);
  taskList.addEventListener("click", removeItems);
}

function addTask(e) {
  e.preventDefault();

  if (taskInput.value === "") {
    alert("Your field is empty");
    return;
  }

  document.querySelector(".card-action").style.display = "block";
  document.querySelector("h4").style.display = "none";

  const li = document.createElement("li");
  li.className = "collection-item";

  li.appendChild(document.createTextNode(taskInput.value));

  const link = document.createElement("a");
  link.className = "delete-item secondary-content";

  link.innerHTML = `<i class="fa fa-remove"></i>`;

  li.appendChild(link);

  taskList.appendChild(li);

  storeLS(taskInput.value);

  taskInput.value = "";
}

function storeLS(task) {
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  if (tasks.length > 0) {
    document.querySelector(".card-action").style.display = "block";
    document.querySelector("h4").style.display = "none";

    tasks.forEach(function (item) {
      const li = document.createElement("li");
      li.className = "collection-item";

      li.appendChild(document.createTextNode(item));

      const link = document.createElement("a");
      link.className = "delete-item secondary-content";

      link.innerHTML = `<i class="fa fa-remove"></i>`;

      li.appendChild(link);

      taskList.appendChild(li);
    });
  } else {
    document.querySelector(".card-action").style.display = "none";
  }
}

function removeItems(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure")) {
      e.target.parentElement.parentElement.remove();
      removeFromLS(e.target.parentElement.parentElement)
    }
  }
}

function removeFromLS(taskElement){
    
}
