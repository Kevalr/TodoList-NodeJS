const express = require('express');

//Creating instance of a router
const router = express.Router();

console.log('----Router loaded----');

//Fetching the Methods from the homeController
const homeController = require('../controller/homeController');

//Home page data will be displated on default link
router.get('/', homeController.showTodoListApp);

//route for creating new task
router.post('/create-task', homeController.createTask);

//route for updating task status
router.post('/toggle-task-status', homeController.toggleTask);

//route for deleting task
router.get('/deletetask', homeController.deleteTask);

module.exports = router;