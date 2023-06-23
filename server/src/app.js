const express = require('express')
const cors = require('cors')

const app = express()
const answerRouter = require("./routes/answer.router")

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json())

app.use('/answer', answerRouter)

module.exports = app