export const createUser = async(API_URL) => {
    const url = `${API_URL}/users`;
    const response = await fetch(url, {
        method: 'POST',
    });
    return await response.json();
}

export const createTask = async(API_URL, userId, requestBody) => {
    const url = `${API_URL}/${userId}/tasks`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    return await response.json();
}

export const getTasks = async(API_URL, userId) => {
    const url = `${API_URL}/${userId}/tasks`;
    const response = await fetch(url, {
        method: 'GET',
    });
    return await response.json();
}

export const editTask = async(API_URL, userId, taskId, requestBody) => {
    const url = `${API_URL}/${userId}/tasks/${taskId}`;
    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(requestBody),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    return await response.json();
}

export const deleteTask = async(API_URL, userId, taskId) => {
    const url = `${API_URL}/${userId}/tasks/${taskId}`;
    return await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },

    });
}