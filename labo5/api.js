const API_URL = "https://glo3102lab4.herokuapp.com";
let userId = "";

export const createUser = async() => {
    const url = `${API_URL}/users`;
    const request = await fetch(url, {
        method: 'POST',
    });
    const response =  await request.json();
    userId = response.id;
}

export const createTask = async(taskName) => {
    const url = `${API_URL}/${userId}/tasks`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            name: taskName,
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    return await response.json();
}

export const getTasks = async() => {
    const url = `${API_URL}/${userId}/tasks`;
    const request = await fetch(url, {
        method: 'GET',
    });
    const response =  await request;
    return (await response.json()).tasks;
}

export const editTask = async(task) => {
    const url = `${API_URL}/${userId}/tasks/${task.id}`;
    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
            name: task.name
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    return await response.json();
}

export const deleteTask = async(taskId) => {
    const url = `${API_URL}/${userId}/tasks/${taskId}`;
    return await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },

    });
}