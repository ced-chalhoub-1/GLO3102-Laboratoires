const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const taskSchema = new Schema().add({name: String, user: {type: Schema.Types.ObjectId, ref:"User"}});

taskSchema.methods.toDTO = function() {
    const obj = this.toObject();
    return {
        id: obj._id,
        name: obj.name
    };
}

const Task = mongoose.model('Task', taskSchema);

exports.model = Task;