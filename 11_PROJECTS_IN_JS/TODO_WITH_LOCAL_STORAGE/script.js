document.addEventListener("DOMContentLoaded", () => {
  const todoIp = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  //adding a task in array

  let tasks = JSON.parse(localStorage.getItem("tasks")) || []; //parse function of JSON retrieves back the original form of the input which was converted to string

  tasks.forEach((task) => renderTask(task))

  addTaskBtn.addEventListener("click", () => {
    const taskText = todoIp.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks(); //write tasks to local storage
    todoIp.value = "";
    console.log(tasks);
  });

  function renderTask(task){
    console.log(task);
  }

  //writing tasks to local storage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks)); //setItem takes up key:value pair where both are strings
  }
});
