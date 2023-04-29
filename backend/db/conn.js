const mongoose = require('mongoose')

require('dotenv').config()
const uri = process.env.URI

async function main() {
    await mongoose.connect(uri)
    console.log('Conectado ao Mongoose!')
}

main().catch((err) => console.log('erro ao conectar no Mongoose => ', err))

module.exports = mongoose



