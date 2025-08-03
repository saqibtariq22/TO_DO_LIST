document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // CREATE: Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const li = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.addEventListener('click', toggleComplete);

        const taskButtons = document.createElement('div');
        taskButtons.classList.add('task-buttons');
        
        const editBtn = document.createElement('button');
        editBtn.innerHTML = '✏️'; // Using emoji for a modern look
        editBtn.classList.add('edit-btn');
        editBtn.title = 'Edit task'; // Add tooltip
        editBtn.addEventListener('click', editTask);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '🗑️'; // Using emoji for a modern look
        deleteBtn.classList.add('delete-btn');
        deleteBtn.title = 'Delete task'; // Add tooltip
        deleteBtn.addEventListener('click', deleteTask);

        taskButtons.appendChild(editBtn);
        taskButtons.appendChild(deleteBtn);
        li.appendChild(taskSpan);
        li.appendChild(taskButtons);
        taskList.appendChild(li);

        taskInput.value = '';
    }

    // UPDATE: Function to toggle task completion
    function toggleComplete(event) {
        const li = event.target.closest('li');
        li.classList.toggle('completed');
    }

    // UPDATE: Function to edit a task
    function editTask(event) {
        const li = event.target.closest('li');
        const taskSpan = li.querySelector('span');
        const currentText = taskSpan.textContent;
        const newText = prompt('Edit your task:', currentText);

        if (newText !== null && newText.trim() !== '') {
            taskSpan.textContent = newText.trim();
        }
    }

    // DELETE: Function to delete a task
    function deleteTask(event) {
        const li = event.target.closest('li');
        // Optional: Add a fade-out animation before removing
        li.style.transition = 'opacity 0.3s ease';
        li.style.opacity = '0';
        setTimeout(() => {
            taskList.removeChild(li);
        }, 300);
    }

    // Event listeners
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});