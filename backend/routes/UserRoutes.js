//const { Router } = require('express')
const router = require('express').Router()

const UserController = require('../controllers/UserController')

//Router().post('/register', UserController.register)
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/checkuser', UserController.CheckUser)
router.get('/:id', UserController.getUserById)

//module.exports = Router
module.exports = router