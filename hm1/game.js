const readline = require("readline");
const input = readline.createInterface(process.stdin);
const randomNumber = (min, max) =>  Math.floor(Math.random() * (max - min)) + min
const range = randomNumber(0, 100)

console.log('Загадано число от 0 до 100')
input.on("line", (data) => {
    newNum = Number(data)

    if (newNum > range ) {
        console.log('Меньше')
    }
    if (newNum < range ) {
        console.log('Больше')
    }
    if (newNum === range) {
        console.log(`Отгадано число ${range}`)
        process.exit(0)
    }

})
input.on("close", () => console.log('end'));