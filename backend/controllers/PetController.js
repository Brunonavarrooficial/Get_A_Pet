const Pet = require('../models/Pet')

class PetController {
    static async create(req, res) {
        res.json({ message: 'Deu certo!' })
    }
}

module.exports = PetController