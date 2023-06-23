const express = require('express')
const {httpGetAnswer} = require('./answer.controller')
const answerRouter = express.Router()

answerRouter.get('/', httpGetAnswer)

module.exports = answerRouter