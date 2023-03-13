const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    taskName : {
        type: String,
        required : true,
    },
    dueDate : {
        type: String,
        required: true,
    },
    category : {
        type: String,
        required: true,
    },
    status : {
        type: String,
        required: true,
    }
});

const Tasks = mongoose.model('tasks', taskSchema);

module.exports = Tasks;