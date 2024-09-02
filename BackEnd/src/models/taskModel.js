//This file defines the schema for tasks
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: stringify,
        enum: ['To Do', 'In Progress', 'Completed'],
        default: 'To Do',
    },
    dueDate: {
        type: Date,
    },
}, {
    timestamps: true,

});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
