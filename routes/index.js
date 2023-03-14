const express = require('express');

const router = express.Router();

console.log('----Router loaded----');

const homeController = require('../controller/homeController');

router.get('/', homeController.showTodoListApp);

router.post('/create-task', homeController.createTask);

router.post('/toggle-task-status', homeController.toggleTask);

router.get('/deletetask', homeController.deleteTask);

module.exports = router;