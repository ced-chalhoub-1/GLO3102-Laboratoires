const uuid = require('uuid');

const users = []

exports.createUser = (req, res) => {
    const userid = uuid.v4()
    const user = {id: userid, tasks: []}
    users.push(user);
    res.send({id: userid});
}

exports.getTasks = (req, res) => {
    const userid = req.params.userid;
    const tasks = users.find(user => user.id == userid).tasks;
    res.send({tasks: tasks});
}

exports.createTask = (req, res) => {
    const userid = req.params.userid;
    const task = {id: uuid.v4(), name: req.body.name}
    const user = users.find(user => user.id == userid);
    user.tasks.push(task);
    res.send(task);
}

exports.editTask = (req, res) => {
    const userid = req.params.userid;
    const user = users.find(user => user.id == userid);
    const task = user.tasks.find(task => task.id == req.params.id);
    task.name = req.body.name;
    res.send(task);
}

exports.deleteTask = (req, res) => {
    const userid = req.params.userid;
    const user = users.find(user => user.id == userid);
    user.tasks = user.tasks.filter(task => task.id != req.params.id);
    res.status(204).send();
}