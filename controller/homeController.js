const epxress = require("express");
const app = epxress();

const Task = require("../models/task");

// let taskList = [{
//     taskName: 'Hello this is testing task',
//     category: 'work',
//     dueDate: '2023/03/20',
//     status: 'pending',
// },
// {
//     taskName: 'keval it is testing task',
//     category: 'personal',
//     dueDate: '2023/03/20',
//     status: 'completed',
// },
// {
//     taskName: 'keval it is testing task',
//     category: 'personal',
//     dueDate: '2023/03/20',
//     status: 'completed',
// }]

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
module.exports = { showTodoListApp, createTask, toggleTask };
