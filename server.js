const express = require('express')

const server = express()

server.use('/app', express.static(__dirname + '/app'))
server.use('/jspm_packages', express.static(__dirname + '/jspm_packages'))
server.get('/config.js', (req, res) => {
    res.sendFile(__dirname + '/config.js')
})

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

const port = process.env.PORT || 8080

server.listen(port, () => {
    console.log(`listening on port ${port}...`)
})