var path = require("path");
var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express()

app.post('/get-file-size', upload.single('file'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    var size = req.file.size
    res.send({size: size})
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/app.html'))
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})