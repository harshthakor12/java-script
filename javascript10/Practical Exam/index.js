let form = document.getElementById("form");
let filterPriority = document.getElementById("filter-priority");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let taskName = document.getElementById("task-title").value;
  let taskDescription = document.getElementById("task-description").value;
  let taskDueDate = document.getElementById("task-due-date").value;
  let priority = document.getElementById("task-priority").value;

  let dataObj = {
    taskName,
    taskDescription,
    taskDueDate,
    priority,
  };

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(dataObj);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTasks();

  document.getElementById("task-title").value = "";
  document.getElementById("task-description").value = "";
  document.getElementById("task-due-date").value = "";
  document.getElementById("task-priority").value = "low";
});

function renderTasks() {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = ""; // Clear current tasks

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let filterValue = filterPriority.value;

  tasks.forEach((task, index) => {
    if (filterValue !== "all" && task.priority !== filterValue) {
      return;
    }

    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = task.taskName;

    let col2 = document.createElement("td");
    col2.innerText = task.taskDescription;

    let col3 = document.createElement("td");
    col3.innerText = task.taskDueDate;

    let col4 = document.createElement("td");
    col4.innerText = task.priority;

    let col5 = document.createElement("td");

    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", () => {
      editTask(index);
    });

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteTask(index);
    });

    col5.appendChild(editButton);
    col5.appendChild(deleteButton);

    row.append(col1, col2, col3, col4, col5);
    tbody.append(row);
  });
}

function editTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let task = tasks[index];

  document.getElementById("task-title").value = task.taskName;
  document.getElementById("task-description").value = task.taskDescription;
  document.getElementById("task-due-date").value = task.taskDueDate;
  document.getElementById("task-priority").value = task.priority;

  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTasks();
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

renderTasks();

filterPriority.addEventListener("change", () => {
  renderTasks();
});
