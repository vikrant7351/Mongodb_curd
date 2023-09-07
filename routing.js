const express = require('express');
const router = express.Router();
const UserController = require('./classroute'); // Adjust the path as needed

const userController = new UserController();

router.post('/users', userController.createUser.bind(userController));
router.get('/users/:id', userController.getUser.bind(userController));
router.put('/users/:id', userController.updateUser.bind(userController));
router.delete('/users/:id', userController.deleteUser.bind(userController));

module.exports = router;


