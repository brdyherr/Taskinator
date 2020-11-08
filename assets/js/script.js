var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("select[name='task-type']").value;
  var taskTypeInput = document.querySelector("input[name='task-name']").value;
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  //   listItemEl.textContent = taskNameInput;
  //   listItemEl.textContent = taskTypeInput;
  tasksToDoEl.appendChild(listItemEl);

  var taskInfoEl = document.createElement("div");
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskNameInput +
    "</h3><span class='task-type'>" +
    taskTypeInput +
    "</span>";
  listItemEl.appendChild(taskInfoEl);
};

formEl.addEventListener("submit", createTaskHandler);
