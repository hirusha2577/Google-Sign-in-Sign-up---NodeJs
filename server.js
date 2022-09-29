var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')

var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore")

// Create instance of express app
var app = express()
var port = 8090

// server js ekata html use karanna use karanne ejs
//ejs stand for embedded javascript
app.set('view engine', 'ejs')

// CSS file image file use karanna view ekak hadaganno
app.use(express.static('views'))
app.set('views',__dirname + '/views')

//give the server access to the user input
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(logger('dev'))

app.get('/',function(request, response){
    //response.send("<h1>hirusha</h1>") //test eka
    response.render('home.ejs')
})

app.post('/',function(request, response){
   // var name = request.body.name
   // response.render('result.ejs', { data: name })
})



app.listen(port,function(){
    console.log('App runing on port '+port)
})