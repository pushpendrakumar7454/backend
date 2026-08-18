let http = require("http")

let server = http.createServer((req, res) => {
    console.log("hey")
    res.end("i get it")

})

server.listen(3000, () => {
    console.log("port is running is 3000")
})