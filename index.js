require('dotenv').config()
const express = require('express')
const sequelize = require('./db')


const PORT = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) => {
  res.status(200).json('!!!')
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()