const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskService = require("./services/taskService.js");
const userService = require("./services/userService.js");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/labo10");
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => console.log('Connected'));

app.use(cors());
app.use((req, res, next) => {
    res.header("Content-Type", "text/html");
    next();
});
app.use(express.json());

app.get('/', (_req, res) => {
    res.send("Running")
});
app.post("/users", userService.createUser);
app.get("/:userId/tasks", taskService.getUsersTasks);
app.post("/:userId/tasks", taskService.createTask);
app.put("/:userId/tasks/:taskId", taskService.modifyTask);
app.delete("/:userId/tasks/:taskId", taskService.deleteTask);

app.listen(8100, () => {
    console.log("Server running at http://localhost:8100");
})