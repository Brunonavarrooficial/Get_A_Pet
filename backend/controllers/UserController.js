const User = require('../models/User')

class UserController {
    static async register(req, res) {
        const { name, email, phone, password, confirmpassword } = req.body

        if (!name) {
            res.status(422).json({ message: 'O nome é obrigatório' })
            return
        }
        if (!email) {
            res.status(422).json({ message: 'O E-mail é obrigatório' })
            return
        }
        if (!phone) {
            res.status(422).json({ message: 'O  telefone é obrigatório' })
            return
        }
        if (!password) {
            res.status(422).json({ message: 'A senha é obrigatória' })
            return
        }
        if (!confirmpassword) {
            res.status(422).json({ message: 'A confirmação da senha é obrigatório' })
            return
        }

        if (password !== confirmpassword) {
            res.status(422).json({ message: 'A senha e a confirmação da senha precisam ser iguais' })
            return
        }

        const userExists = await User.findOne({ email: email })
        if (userExists) {
            res.status(422).json({ message: 'Por favor, ultilize outro e-mail' })
            return
        }


        res.json('Olá Get A Pet!')
    }
}

module.exports = UserController