const todoIp = document.getElementById("todo-input")
const addTaskBtn = document.getElementById("add-task-btn")
const todoList = document.getElementById("todo-list")

//adding a task in array

let tasks = []

addTaskBtn.addEventListener("click", () =>{
    const taskText = todoIp.value.trim()
    if(taskText === "") return;

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(newTask)
    saveTasks() //write tasks to local storage
    todoIp.value = ""
    console.log(tasks)
})

//writing tasks to local storage
function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks))
}