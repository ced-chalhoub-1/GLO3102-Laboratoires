const Task = require("../models/Task.js").model;

exports.getUsersTasks = async (req, res) => {
    const tasks = await Task.find({user:req.params.userId});
    res.send(tasks.map((task) => task.toDTO()));
};

exports.createTask = async (req, res) => {
    const task = new Task({name:req.body.name, user:req.params.userId})
    await task.save()
    res.send(task.toDTO());
};

exports.modifyTask = async (req, res) => {
    const task = await Task.findOne({_id:req.params.taskId});
    task.name = req.body.name;
    await task.save();
    res.send(task.toDTO());
};

exports.deleteTask = async (req, res) => {
    await Task.deleteOne({_id:req.params.taskId});
    res.sendStatus(204);
}

