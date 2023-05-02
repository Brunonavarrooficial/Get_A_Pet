//const { Router } = require('express')
const router = require('express').Router()

const UserController = require('../controllers/UserController')

//Router().post('/register', UserController.register)
router.post('/register', UserController.register)

//module.exports = Router
module.exports = router