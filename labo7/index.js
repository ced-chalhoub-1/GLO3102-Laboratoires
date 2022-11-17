const express = require("express");
const taskService = require("./services/tasks.js");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json());

app.get("/tasks", taskService.getTasks);
app.post("/tasks", taskService.createTask);
app.put("/tasks/:id", taskService.editTask)
app.delete("/tasks/:id", taskService.deleteTask);

app.listen(8100);

console.log('Server running - http://localhost:8100');