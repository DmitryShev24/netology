const http = require("http")
const readline = require("readline")
const input = readline.createInterface(process.stdin)
const myAPIKey = process.env.myAPIKey

console.log('Введите название городе')
input.on('line', (city) => {
    const url = `http://api.weatherstack.com/current?access_key=${myAPIKey}&query=${city}`
    http.get(url, (res) => {
        const statusCode = res.statusCode
        if (statusCode != 200) {
            console.error(`Status code: ${statusCode}`)
        }
        res.setEncoding("utf8")
        let rawData = ""
        res.on("data", (chunk) => {
            rawData += chunk
        })
        res.on("end", () => {
            let parsedData = JSON.parse(rawData)
            console.log(parsedData)
        })
    } )
})