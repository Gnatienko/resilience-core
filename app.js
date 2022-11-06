import * as dotenv from 'dotenv'
import express from 'express'

dotenv.config()
const PORT = process.env.PORT
const app = express()
app.use(express.json())


app.get('/', (req, res) => {
  res.status(200).json('!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})
//