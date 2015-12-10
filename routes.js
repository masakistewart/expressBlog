var express = require('express');
var funky = require('./funky');
var router = express.Router();

router.get('/',function(req,res) { 
	var arts = funky.postData();
	console.log(arts)
	res.render('pages/index', {posts: arts})
 });

router.post('/articles', function(req, res) {
	var title = req.body.title;
	var article = req.body.article;
	var img = req.body.img;
	funky.getData(title, article, img);
	var arts = funky.postData();
	res.render('pages/index', {posts: arts});
})

router.get('/about',function(req,res) { 
  res.render('pages/about');
 });

router.get('/contact',function(req,res) { 
  res.render('pages/contact');
 });

router.get('/post',function(req,res) { 
  res.render('pages/post');
 });

module.exports = router;