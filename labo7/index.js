const express = require("express");
const taskService = require("./services/tasks.js");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

app.use(bodyParser.json());
app.use(cors());

const corsOptions = {
    origin: "*",
    methods: "*"
};

app.get("/:userid/tasks", cors(corsOptions), taskService.getTasks);
app.post("/:userid/tasks", cors(corsOptions), taskService.createTask);
app.put("/:userid/tasks/:id", cors(corsOptions), taskService.editTask)
app.delete("/:userid/tasks/:id", cors(corsOptions), taskService.deleteTask);

app.listen(8100);

console.log('Server running - http://localhost:8100');