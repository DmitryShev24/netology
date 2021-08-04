const readline = require("readline")
const input = readline.createInterface(process.stdin)
const path = require("path")
const fs = require('fs')
const yargs = require("yargs/yargs");
const {hideBin} = require("yargs/helpers");
const argv = yargs(hideBin(process.argv))

const file = path.join(__dirname, String(argv.argv._))

fs.readFile(file, 'utf-8', (err, data) => {
    if (err) throw new Error(err)

    normData = data.slice(0, -1).split(',')
    let totalGame = normData.length
    let lose = 0
    let win = 0

    for (let i = 0; i < totalGame; i++) {
        let game = normData[i]
        if (game == 1) {
            win = win + 1
        } else if (game == 0){
            lose = lose + 1
        }
    }

    let winPercent = ((win * 100) / totalGame).toFixed(0)

    console.log(`Общее количество партий — ${totalGame}`)
    console.log(`Количество выигранных партий — ${win}, проигранных партий — ${lose}`)
    console.log(`Процентное соотношение выигранных партий ${winPercent}%`)
})