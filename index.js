require('dotenv').config()
const express = require('express')
const sequelize = require('./db')



const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
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