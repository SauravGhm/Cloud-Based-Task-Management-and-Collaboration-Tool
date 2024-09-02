//This file contains the logic for handling task-related requests

const Task = require('../models/taskModel');

//@desc Get all tasks
//@route GET /api/tasks
//@access Public

const getTasks = async(req, res) => {
    try {
        const tasks = await Task.find({});
        res.json(tasks);
    } catch(err) {
        res.status(500).json({message: 'Server Error'});
    }
};

//@desc Create a new task
//@route POST api/tasks
//@access Public

const createTask = async(req, res) =>{
    const {title, description, dueDate} = req.body; 

}