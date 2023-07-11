var express = require('express')
var app = express()
app.disable("x-powered-by")
app.get('/', function (req, res) {
    res.send('Welcome to Rita's web!')
})

app.listen(3000, function() {
    console.log('Hello world app listgening on port 3000!')
})
