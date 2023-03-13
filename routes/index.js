const express = require('express');

const router = express.Router();

console.log('----Router loaded----');

const homeController = require('../controller/homeController');

router.get('/', homeController.showTodoListApp);

// const createTask = require('');
router.post('/create-task', homeController.createTask);

router.post('/toggle-task-status', homeController.toggleTask)

module.exports = router