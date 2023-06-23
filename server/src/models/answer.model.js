const wordleAnswer = require("../db/db")

function getAnswer() {

    let randomNumber = Math.floor(Math.random() * 138)
    console.log(wordleAnswer[randomNumber])
    return wordleAnswer[randomNumber].toUpperCase()
    
}

module.exports = {
    getAnswer,
}