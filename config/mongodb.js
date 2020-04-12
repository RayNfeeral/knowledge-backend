const mongoose = require('mongoose')
// const { mongodb } = require('../.env')
mongoose.connect(process.env.mongodb, { useNewUrlParser: true })
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
        console.log(msg)
    })