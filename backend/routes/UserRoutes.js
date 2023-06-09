//const { Router } = require('express')
const router = require('express').Router()

const UserController = require('../controllers/UserController')

const verifyToken = require('../helpers/verify-token')
const { imageUpload } = require('../helpers/image-upload')

//Router().post('/register', UserController.register)
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/checkuser', UserController.CheckUser)
router.get('/:id', UserController.getUserById)
router.patch('/edit/:id', verifyToken, imageUpload.single('image'), UserController.editUser)

//module.exports = Router
module.exports = router