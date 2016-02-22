'use strict'

var express = require('express');
var path = require('path');
var logger = require('morgan');


var app = express();
var port = process.env.PORT || 3000;



app.use(logger('dev'));


//  `/`: to show a homepage.
//  `/burgers`: to create a burger or list burgers (depending on the HTTP verb used [see [wiki link](https://en.wikipedia.org/wiki/Representational_state_transfer)]).
//  `/burgers/:id`: to view/edit/delete ONE burger.
//  `/burgers/new`: to view the 'new burger' form.
//  `/burgers/:id/edit`: to view the 'edit burger' form.

app.get('/', function(req,res){
  res.send("heres the homepage")
});

app.get('/burgers', function(req,res){
  res.send("this is the burger GET route")
})
   .post('/burgers', function(req,res){
     res.send("this is the burger POST route")
   });

app.get('/burgers/:id', function(req,res){
  res.send("this is the edit or PUT route")
});

app.get('/burgers/new', function(req,res){
  res.send("this is the view the new burger form")
});

app.get('/burgers/:id/edit', function(req,res){
  res.send("this is the view the edit burger form")
});




var server = app.listen(port, function(){
  console.log("Server Running on Port: " + port);
})
