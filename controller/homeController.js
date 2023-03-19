const epxress = require("express");
const app = epxress();

//Creating instance to schema to populate database with that
const Task = require("../models/task");

//For Fetching and returning all tasks from databse
const showTodoListApp = async (req, res) => {
  let taskList = await Task.find({});
  return res.render("index", { taskList: taskList });
};

//For Creating the new Task
const createTask = (req, res) => {
  console.log(req.body);
  Task.create({
    taskName: req.body.taskName,
    category: req.body.taskCategory,
    dueDate: req.body.taskDueDate,
    status: "pending",
  });
  return res.redirect("back");
};

//For completeting or un-completing a task
const toggleTask = async (req, res) => {

  let updatedTaskStatus = "";
  const task = await Task.findById(req.query.id);
  if (task.status == "completed") {
    updatedTaskStatus = "pending";
  } else {
    updatedTaskStatus = "completed";
  }

  task.status = updatedTaskStatus;
  await task.save();
  res.redirect("back");
};

//For Deleteting the task
const deleteTask = async(req, res) => {
    await Task.findByIdAndDelete(req.query.id);
    return res.redirect('back');
}

module.exports = { showTodoListApp, createTask, toggleTask, deleteTask };
