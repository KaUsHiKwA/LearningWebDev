const task = document.getElementById('to-do-box');
const dueDate = document.getElementById('due-date');
const todoList = document.querySelector('.to-do-list');

function addToDo() {
    if (!task.value.trim() || !dueDate.value.trim()) {
        alert('Task or dueDate cannot be empty');
        return;
    }
    const todoCard = document.createElement('div');
    todoCard.className = 'todo-card';
    todoCard.innerHTML =
        `
        <p>${task.value}</p>
        <p>${dueDate.value}</p>
        <button class="card-btn" onclick="editToDo(this)">Edit</button>
        <button class-"card-btn" onclick="deleteToDo(this)">Delete</button>
        `;
    todoList.appendChild(todoCard);

    // reset the feilds
    task.value = '';
    dueDate.value = '';
    document.getElementById('addbtn').innerText = 'Add To Do'
}

function deleteToDo(btn) {
    todoList.removeChild(btn.parentElement);
}

function editToDo(btn) {
    const addbtn = document.getElementById('addbtn');
    const parent = btn.parentElement;
    const childp = parent.querySelectorAll('p');
    task.value = childp[0].innerText;
    dueDate.value = childp[1].innerText;

    addbtn.innerText = 'update';
    deleteToDo(btn);
}

