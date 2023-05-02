const User = require('../models/User')

class UserController {
    static async register(req, res) {
        res.json('Olá Get A Pet!')
    }
}

module.exports = UserController