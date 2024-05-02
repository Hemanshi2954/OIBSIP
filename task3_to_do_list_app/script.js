// Selecting elements
const taskInput = document.getElementById('taskInput');
const descriptionInput = document.getElementById('descriptionInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');
const generatedTasks = document.getElementById('generatedTasks');

// Function to add a new task
function addTask() {

    // Get the task and description input values
    const taskText = taskInput.value.trim();
    const descriptionText = descriptionInput.value.trim();
    if (taskText === '' || descriptionText === '') return;

    // Create a new task element
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    // Get current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    // Create date and time element
    const dateTimeElement = document.createElement('div');
    dateTimeElement.classList.add('task-date-time');
    dateTimeElement.textContent = `Added: ${formattedDate} ${formattedTime}`;

    // Create checkbox and title elements in one line
    const checkbox = Object.assign(document.createElement('input'), { type: 'checkbox', className: 'task-checkbox' });
    const titleElement = Object.assign(document.createElement('div'), { className: 'task-title', textContent: taskText });

    // Append checkbox and title elements to task
    //  taskElement.appendChild(checkbox);
    //  taskElement.appendChild(titleElement);

    // Create description element
    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('task-description');
    descriptionElement.textContent = descriptionText;

    // Create buttons container
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('task-buttons');

    // Create edit button
    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function () {
        const newText = prompt('Enter new task text:', titleElement.textContent);
        if (newText !== null) {
            titleElement.textContent = newText;
            const newDescription = prompt('Enter new description:', descriptionElement.textContent);
            if (newDescription !== null) {
                descriptionElement.textContent = newDescription;
            }
        }
    });

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Del ';
    deleteButton.addEventListener('click', function () {
        taskElement.remove();
    });

    // Append elements to task
    taskElement.appendChild(dateTimeElement);
    taskElement.appendChild(checkbox);
    taskElement.appendChild(titleElement);
    taskElement.appendChild(descriptionElement);
    taskElement.appendChild(buttonsContainer);

    // Append buttons to buttons container
    buttonsContainer.appendChild(editButton);
    buttonsContainer.appendChild(deleteButton);

    // Append task to todo list
    todoList.appendChild(taskElement);

    // Clear input fields
    taskInput.value = '';
    descriptionInput.value = '';

    // Change background gradient
    changeBackgroundGradient();

}

// Function to change background gradient
function changeBackgroundGradient() {
    const colors = ['#ff9a9e', '#fecfef', '#9afff9', '#ffecb8', '#c5f5e0']; // Array of gradient colors
    const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    container.style.backgroundImage = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
}

// Add task when clicking the Add button
addButton.addEventListener('click', addTask);

// Add task when pressing Enter key
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
