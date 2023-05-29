const jwt = require('jsonwebtoken')

const getToken = require('./get-token')

const checkToken = (req, res, next) => {
    if (!req.headers.authorization) {
        console.log('Cai no if altorization => ', req.headers.authorization)
        return res.status(401).json({ message: "Acesso Negado!" })
    }

    const token = getToken(req)
    console.log('chegui aqui token => ', token)

    if (!token) {
        return res.status(401).json({ message: 'Acesso Negado!' })
    }

    console.log('cheguei depois altorization => ', req.headers.authorization)

    try {
        const verified = jwt.verify(token, 'nossosecret')
        req.user = verified
        next()
    } catch (error) {
        return res.status(400).json({ message: 'Token Inválido!' })
    }
}

module.exports = checkToken