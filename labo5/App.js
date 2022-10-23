import {
    createUser,
    createTask,
    getTasks,
    editTask,
    deleteTask
} from "./api.js";

const { createApp } = Vue

createApp({
    data() {
        return {
            inputValue: "",
            tasks: []
        }
    },
    methods: {
        async createTask() {
            await createTask(this.inputValue);
            this.inputValue = "";
            this.tasks = await getTasks();
        },
        async editTask(task){
            await editTask(task)
        },
        async deleteTask(task){
            await deleteTask(task.id);
            this.tasks = await getTasks();
        }
    },
    beforeCreate(){
        createUser();
    },
}).mount("#main_container")