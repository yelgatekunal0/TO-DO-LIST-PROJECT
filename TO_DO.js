// alert("js Connected")
// alert("WelCome ")

let input = document.getElementById("taskInput");
let list = document.getElementById("taskList");


window.onload = loadTasks;


function addTask() {

  if (input.value === "") {
    alert("Please enter a task");
    return;
  }

  createTask(input.value);
  saveTasks();

  input.value = "";
}

//  create the task
function createTask(taskText) {

  let li = document.createElement("li");
  li.innerText = taskText;

  // Delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "remove";

  deleteBtn.onclick = function () {
    list.removeChild(li);
    saveTasks();
  };

  li.appendChild(deleteBtn);
  list.appendChild(li);
}

// save the task to Local Storage
function saveTasks() {
  let tasks = [];

  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push(li.firstChild.textContent);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// load tasks from local storage
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(task => {
    createTask(task);
  });
}