// Task Manager App
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Event listeners
taskForm.addEventListener('submit', addTask);
taskList.addEventListener('click', toggleTask);
taskList.addEventListener('contextmenu', deleteTask);

// Tasks array to store the tasks
let tasks = [];

// Function to add a new task
function addTask(event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const task = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    tasks.push(task);
    renderTask(task);
    taskInput.value = '';
  }
}

// Function to render a task
function renderTask(task) {
  const taskItem = document.createElement('li');
  taskItem.dataset.id = task.id;
  taskItem.innerHTML = `
    <span>${task.text}</span>
    <button class="toggle-button">Mark Complete</button>
  `;
  if (task.completed) {
    taskItem.classList.add('completed');
    taskItem.querySelector('.toggle-button').textContent = 'Mark Incomplete';
  }
  taskList.appendChild(taskItem);
}

// Function to toggle task completion
function toggleTask(event) {
  if (event.target.classList.contains('toggle-button')) {
    const taskItem = event.target.parentNode;
    const taskId = Number(taskItem.dataset.id);
    const task = tasks.find(task => task.id === taskId);
    task.completed = !task.completed;
    taskItem.classList.toggle('completed');
    event.target.textContent = task.completed ? 'Mark Incomplete' : 'Mark Complete';
  }
}

// Function to delete a task
function deleteTask(event) {
  event.preventDefault()
}
