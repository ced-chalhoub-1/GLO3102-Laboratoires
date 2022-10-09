import {createUser, createTask, getTasks, editTask, deleteTask} from "./api.js";

const API_URL = "https://glo3102lab4.herokuapp.com";
let userId;

const body = await createUser(API_URL);
userId = body.id;

document.querySelector("#createTask").addEventListener('click', async () => {
    const taskname = document.querySelector("#taskName").value;
    if(taskname !== ""){
        const data = {name: `${taskname}`};
        await createTask(API_URL, userId, data);
    }
    await updateDiv();
})
const updateDiv = async () => {
    const mainDiv = document.querySelector("#tasks");
    const responseBody = await getTasks(API_URL, userId)
    mainDiv.innerHTML = "";
    responseBody['tasks'].forEach(task => {
        const div = document.createElement("div");
        div.className = "input-group";

        const input = document.createElement("input");
        input.type = "text";
        input.value = task.name;
        input.setAttribute("data-taskId", task.id)
        input.className = "form-control task";
        div.appendChild(input);

        const modifyButton = document.createElement("input");
        modifyButton.type = "button";
        modifyButton.value = "Modify";
        modifyButton.className = "btn btn-warning modifyTask";
        modifyButton.addEventListener('click', () => {
            const newName = input.value;
            modifyTask(task.id, newName);
        })

        div.appendChild(modifyButton);

        const deleteButton = document.createElement("input");
        deleteButton.type = "button";
        deleteButton.value = "Delete";
        deleteButton.className = "btn btn-danger deleteTask";
        deleteButton.addEventListener('click', () => {
            deleteTask(API_URL, userId, task.id);
            div.remove();
        })

        div.appendChild(deleteButton);

        mainDiv.appendChild(div);

    })

}

const modifyTask = async (taskId, taskName) => {
    const requestBody = {name: `${taskName}`}
    await editTask(API_URL, userId, taskId, requestBody);
}