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
    const div = document.querySelector("#tasks");
    const responseBody = await getTasks(API_URL, userId)
    div.innerHTML = "";
    responseBody['tasks'].forEach(task => {
        const text = document.createElement("li");
        text.innerText = `${task.id} - ${task.name}`;
        text.className = "list-group-item";
        div.appendChild(text);
    })
}
document.querySelector("#getTasks").addEventListener('click', async() => {
    await updateDiv();
})

document.querySelector("#modifyTask").addEventListener('click', async() => {
    const taskid = document.querySelector("#taskId").value;
    const taskname = document.querySelector("#changeTaskName").value;
    if(taskname !== "" && taskname !== null && taskid !== "" && taskid !== null){
        const data = {name: `${taskname}`};
        try{
           await editTask(API_URL, userId, taskid, data);
        } catch(err){
            console.log(err)
        }

    }
    await updateDiv();
})

document.querySelector("#deleteTask").addEventListener('click', async() => {
    const taskId = document.querySelector("#taskId").value;
    try{
        await deleteTask(API_URL, userId, taskId)
    } catch(err){
        console.log(err)
    }

    await updateDiv();
})