/**
 * "When the form is submitted, prevent the default action, get the values of the name, email and
 * message fields, create an object with those values, and alert the user that the message has been
 * sent."</code>
 */
function saludar() {
    form_contact.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('mensaje').value;
        const data = {
            name,
            email,
            message
        };
        alert(`Hola ${name}, tu mensaje ha sido enviado con éxito.`);
    });
}

let listTask = [];

function addTask() {

    const nameTask = document.getElementById('task').value;
    const descriptionTask = document.getElementById('description').value;

    const Task = {
        nameTask,
        descriptionTask
    };

    if (containsTask(Task)) {
        alert('La tarea ya existe');
    } else {
        listTask.push(Task);
        alert('Tarea agregada');
    }
    showTask();
}


function containsTask(task) {
    for (let i = 0; i < listTask.length; i++) {
        if (listTask[i].nameTask === task.nameTask) {
            return true;
        }
    }
    return false;
}


function showTask() {
    let list = '';
    for (let i = 0; i < listTask.length; i++) {
        list += /*html*/ `<tr>
                <th scope="row">${i + 1}</th>
                <td>${listTask[i].nameTask}</td>
                <td>${listTask[i].descriptionTask}</td>
                <td>
                    <a href="#" class="btn btn-warning">Edit</a>
                    <a href="#" class="btn btn-danger" onclick="deleteTask('${i}')">Delete</a>
                </td>
            </tr>`;
    }
    document.getElementById('taskList').innerHTML = list;
}


function deleteTask(index) {
    listTask.splice(index, 1);
    showTask();
}