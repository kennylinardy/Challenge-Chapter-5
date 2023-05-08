const router = require('express').Router();

const userController = require('../controller/userController');
const Auth = require('../middleware/auth');

router.get('/', userController.getUsers)
router.post('/register', userController.createUser)
router.post('/login', userController.login)
router.get('/:id', userController.getUserById)
router.put('/:id', userController.editUser)
router.delete('/delete/:id', userController.deleteUser)

module.exports = router