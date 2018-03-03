var app = require('express')();
var http = require('http').Server(app);
var path = require('path');
var bodyParser = require('body-parser');
var json = require('json');
var mysql = require('mysql');
var logger = require('logger');
var url = require('url');
var cors = require('cors');
var singlequotes = require('to-single-quotes');
var mongodbdatabase = require('mongodb');
var routes = require('./routes/index');
var users = require('./routes/users');
//var bank = require('./routes/bank');
var card = require('./routes/card');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use('/',routes);
app.use('/users', users);
//app.use('/bank',bank);
app.use('/card',card);


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  res.json(err);
  err.status = 404;
  next(err);
});





http.listen(8080,function(){
	console.log("Connected to the server 8080");
});
module.exports = app;
