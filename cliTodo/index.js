import fs from 'fs';
import { Command } from 'commander';

const program = new Command();

function createTodo(todo) {
    this.todo = todo;
    this.doneStatus = false;
}

program
    .name('ToDoApp')
    .description('CLI to do file based tasks')
    .version('0.8.0');

program
    .command('addTodo')
    .argument('<string>', 'todo task')
    .action((str) => {
        fs.readFile('todo.json', 'utf-8', (err, res) => {
            let data = JSON.parse(res);
            let todoo = new createTodo(str);
            data.todos.push(todoo);
            fs.writeFile('todo.json', JSON.stringify(data), (err) => {
                if (err) console.log('Error Writing File: ' + err);
                else console.log('Todo Added!!');
            });
        });
    });

program
    .command('deleteTodo')
    .argument('<string>', 'Task to be deleted!!')
    .action((str) => {
        fs.readFile('todo.json', 'utf-8', (err, res) => {
            let data = JSON.parse(res);
            let arr = data.todos;
            if (arr.find((ele) => ele.todo == str)) {
                arr.splice(arr.indexOf(arr.find((ele) => ele.todo == str)), 1);
            } else {
                console.log("todo not found!!");
                return;
            }

            fs.writeFile('todo.json', JSON.stringify(data), (err) => {
                if (err) console.log('Error Writing File: ' + err);
                else console.log('Todo deleted!!');
            });
        });
    });

program
    .command('markDone')
    .argument('<string>', 'todo to update')
    .action((str) => {
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
    });

program.parse();