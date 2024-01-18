//npm run dev

require("dotenv").config()
const express = require("express")
const sequelize = require("./db")
const cors = require("cors")
const router = require("./routes/index")

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors({ origin: "*" }))
app.use("/", router)
app.get("/", (req, res) => {
  res.send("Hello, you are using the Resilience API v0.0.4")
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
