const readline = require("readline")
const input = readline.createInterface(process.stdin)
const path = require("path")
const fs = require('fs')
const yargs = require("yargs/yargs");
const {hideBin} = require("yargs/helpers");
const argv = yargs(hideBin(process.argv))
const file = path.join(__dirname, String(argv.argv._))

const appendFileLog = (answer) =>{
    let content = answer
    fs.appendFile(file, content, (err) => {
        if (err) throw new Error(err)
    })
}

input.on("line", (data) => {
    let randomNumber = Math.floor(Math.random() * 2 + 1)
    if ((data != 1) && (data != 2)) {
        return console.log("Вы ввели отличное от 1 и 2 число!")
    }
    if (data == randomNumber) {
        appendFileLog('1,')
        console.log(`Вы угадали, я и правда загадал ${randomNumber}`)
    } else {
        console.log('К сожалению вы не угадали :(')
        appendFileLog('0,')
    }
})