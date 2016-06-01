var express =   require('express');
var bodyParser =    require('body-parser');
var multer  =   require('multer');
var mongoose = require('mongoose');
var logger = require('morgan');
var path = require('path');
var port = process.env.PORT || 3000;

var app =   express();

//set view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname,'public')));

//Connecting database
//=============================================================================
var db = require('./db');
mongoose.connect(db.url);


var routes = require('./routes/index');
app.use('/',routes);

app.listen(port);
console.log('Server is listening at '+port);





