var express = require('express');
var router = express.Router();

router.get('/',function(req,res) { 
  res.render('pages/index');
 });

router.get('/about',function(req,res) { 
  res.render('pages/about');
 });

router.get('/contact',function(req,res) { 
  res.render('pages/contact');
 });

module.exports = router;