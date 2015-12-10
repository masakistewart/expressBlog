var router = require('./routes');
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.set('view engine', 'ejs');
app.use('/', router).listen(8000);
