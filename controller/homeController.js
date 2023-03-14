const epxress = require("express");
const app = epxress();

const Task = require("../models/task");

const showTodoListApp = async (req, res) => {
  let taskList = await Task.find({});
  return res.render("index", { taskList: taskList });
};

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

const toggleTask = async (req, res) => {

  let updatedTaskStatus = "";
//   console.log(req.body);
//   let task = await Task.findById(req.query.id);
//   console.log(task);
  // await Task.findOneAndUpdate(req.query.id, { status: updatedTaskStatus})
  // task = await Task.findById(req.query.id);
  // console.log(task);

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

const deleteTask = async(req, res) => {
    await Task.findByIdAndDelete(req.query.id);
    return res.redirect('back');
}

module.exports = { showTodoListApp, createTask, toggleTask, deleteTask };
