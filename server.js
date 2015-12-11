var router = require('./routes');
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(express.static('public'));
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));


app.set('view engine', 'ejs');
app.use('/', router).listen(process.env.PORT || 8000);
