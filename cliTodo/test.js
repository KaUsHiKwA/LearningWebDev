import fs from 'fs';

function createTodo(todo) {
    this.todo = todo;
    this.doneStatus = false;
}

let str = 'Iamroopnayansingh';

fs.readFile('todo.json', 'utf-8', (err, res) => {
    let data = JSON.parse(res);
    let arr = data.todos;
    if (arr.find((ele) => ele.todo == str)) {
        const task = arr.find((ele) => ele.todo == str);
        task.doneStatus = true;
    } else {
        console.log("todo not found!!");
        return;
    }

    fs.writeFile('todo.json', JSON.stringify(data), (err) => {
        if (err) console.log('Error Writing File: ' + err);
        else console.log('ToDo Done!!');
    });
});