const uuid = require('uuid');

let tasks = []

exports.getTasks = (req, res) => {
    res.send({tasks: tasks});
}

exports.createTask = (req, res) => {
    const task = {id: uuid.v4(), name: req.body.name}
    tasks.push(task);
    res.send(task);
}

exports.editTask = (req, res) => {
    const task = tasks.find(task => task.id == req.params.id);
    task.name = req.body.name;
    res.send(task);
}

exports.deleteTask = (req, res) => {
    tasks = tasks.filter(task => task.id != req.params.id);
    res.status(204).send();
}