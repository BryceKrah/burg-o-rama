'use strict'

var express = require('express');
var path = require('path');
var logger = require('morgan');
var burgerRoutes = require(path.join(__dirname, '/routes/burger'));
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(logger('dev'));

app.get('/', function(req,res){
  res.send("heres the homepage")
});

app.use('/burgers', burgerRoutes);




var server = app.listen(port, function(){
  console.log("Server Running on Port: " + port);
})
