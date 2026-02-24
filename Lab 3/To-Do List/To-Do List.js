
const taskInput = document.getElementById('new-task');
const addBtn = document.getElementById('add-task');
const todoList = document.getElementById('todo-list');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';

    const binIcon = document.createElement('img');
    binIcon.src = 'bin.png';
    binIcon.alt = 'bin';
    binIcon.style.width = '20px';
    binIcon.style.height = '20px';

    deleteBtn.appendChild(binIcon);

    li.appendChild(checkbox);   // Слева
    li.appendChild(span);       // Вцентре
    li.appendChild(deleteBtn);  // Справа
    todoList.appendChild(li);



    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            span.classList.add('done');
        } else {
            span.classList.remove('done');
        }
    });

    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(li);
    });

    taskInput.value = "";
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});