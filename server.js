var router = require('./routes');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use('/', router).listen(8000);
