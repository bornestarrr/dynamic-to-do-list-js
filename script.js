// Ensure DOM is loaded before running script
document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    // Prevent empty tasks
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create list item and remove button
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Remove task on click
    removeBtn.onclick = () => taskList.removeChild(li);

    // Append to DOM
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = '';
  }

  // When 'Add Task' is clicked
  addButton.addEventListener('click', addTask);

  // When Enter is pressed in input field
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
  });
});
