const express = require('express')
const cors = require('cors')

const app = express()
const answerRouter = require("./src/routes/answer.router")

app.use(cors({
    origin: 'https://wordle-verse.vercel.app'
}))

app.use(express.json())

app.use('/answer', answerRouter)

module.exports = app