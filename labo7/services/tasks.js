const uuid = require('uuid');

const users = []


exports.getTasks = (req, res) => {
    const userid = req.params.userid;
    console.log(userid)
    const user = {id: userid, tasks: []}
    users.push(user);
    console.log(users);
    if(!userid || userid === ""){
        res.status(400).send();
    }
    const tasks = users.find(user => user.id == userid).tasks;
    res.send({tasks: tasks});
}

exports.createTask = (req, res) => {
    const userid = req.params.userid;
    const name = req.body.name;
    console.log(typeof(name));
    if(!name || name === ""){
        res.status(400).send();
    }
    const task = {id: uuid.v4(), name: req.body.name}
    const user = users.find(user => user.id == userid);
    user.tasks.push(task);
    console.log(user);
    res.send(task);

}

exports.editTask = (req, res) => {
    const userid = req.params.userid;
    const user = users.find(user => user.id == userid);
    const task = user.tasks.find(task => task.id == req.params.id);
    if (!req.body.name || req.body.name === "" || !task){
        res.status(400).send();
    }
    task.name = req.body.name;
    res.send(task);

}

exports.deleteTask = (req, res) => {
    const userid = req.params.userid;
    const user = users.find(user => user.id == userid);
    const task = user.tasks.find(task => task.id == req.params.id);
    if(!task){
        res.status(400).send();
    }
    user.tasks = user.tasks.filter(task => task.id != req.params.id);
    console.log(users);
    res.status(204).send();
}