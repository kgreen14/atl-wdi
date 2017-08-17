var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var hbs = require('hbs');
var port = process.env.PORT || 3000
var piratesController = require('./controllers/piratesController.js');


//===========================
// MIDDLEWARE
//===========================

//these are for bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//set handlebars as view engine
app.set("view engine", "hbs");
app.set('views', './views');
    


app.use("/pirates", piratesController);

app.use(express.static(__dirname + '/public'));
/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});




app.listen(port, function() {
  console.info('Server Up -- Yar har har on port', port,"//", new Date());
});