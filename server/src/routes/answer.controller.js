const { getAnswer } = require('../models/answer.model')

async function httpGetAnswer(req, res) {
    return res.status(200).json(await getAnswer() )
}

module.exports = {
    httpGetAnswer,
}