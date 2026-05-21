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
    renderTask(newTask);
    todoIp.value = "";
    console.log(tasks);
  });

  function renderTask(task){
    const li = document.createElement("li")
    li.setAttribute("data-id", task.id)
    if(task.completed) li.classList.add("completed")
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `

    li.addEventListener("click", (e) => {
      if(e.target.tagName === "BUTTON") return
      task.completed = !task.completed
      li.classList.toggle("completed") //it toggles the class 'completed' on the 'li' element based on the value of 'task.completed'
      saveTasks()
    })

    li.querySelector('button').addEventListener('click', (e) => {
      e.stopPropagation() //prevent toggle from firing
      tasks = tasks.filter((t) => t.id !== task.id) //removing the current 'li' from the 'tasks' array
      li.remove() //removing from the frontend
      saveTasks()
    })

    todoList.appendChild(li)
  }

  //writing tasks to local storage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks)); //setItem takes up key:value pair where both are strings
  }
});
