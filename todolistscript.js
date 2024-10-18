let todos = [];

function menambahkanTugas() {
    const input = document.getElementById('todo-input');
    const tugas = input.value.trim();
    
    if (tugas) {
        const newTodo = {
            id: Date.now(),
            text: tugas
        };
        todos.push(newTodo);
        input.value = '';
        menampilkanTugas();
    }
}

function menampilkanTugas() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todo.text}</span>
            <button class="edit-btn" onclick="mengeditTugas(${todo.id})">Edit</button>
            <button onclick="menghapusTugas(${todo.id})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

function menghapusTugas(id) {
    todos = todos.filter(todo => todo.id !== id);
    menampilkanTugas();
}

function mengeditTugas(id) {
    const tugasbaru = prompt('Edit tugas kamu:', todos.find(todo => todo.id === id).text);
    
    if (tugasbaru !== null) {
        todos = todos.map(todo => 
            todo.id === id ? { ...todo, text: tugasbaru } : todo
        );
        menampilkanTugas();
    }
}
