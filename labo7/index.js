const express = require("express");
const taskService = require("./services/tasks.js");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json());

app.post("/users", taskService.createUser);

app.get("/:userid/tasks", taskService.getTasks);
app.post("/:userid/tasks", taskService.createTask);
app.put("/:userid/tasks/:id", taskService.editTask)
app.delete("/:userid/tasks/:id", taskService.deleteTask);

app.listen(8100);

console.log('Server running - http://localhost:8100');