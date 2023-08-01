var express = require('express')
var app = express()
app.disable("x-powered-by")
app.get('/', function (req, res) {
    res.send('Hello world world!')
})

app.listen(3000, function() {
    console.log('Hello world app listening on port 3000!')
})
