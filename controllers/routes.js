var express = require('express');
var funky = require('../funky');
var router = express.Router();


router.get('/',function(req,res) {
	var arts = funky.getData();
	//res.render('pages/posts', {posts: arts})
 });

router.get('/index',function(req,res) { 
	var arts = funky.postData()
  res.render('pages/index', {posts: arts});
 });

router.get('/index/:thing',function(req,res) { 
	var thing = req.params.thing;
	var keys = funky.findKeyWords(thing);
	console.log(keys)
	res.render('pages/posts', {posts: keys});
 });

router.post('/articles', function(req, res) {
	var title = req.body.title;
	var article = req.body.article;
	var img = req.body.img;
	var keywords = funky.parseKeyWords(req.body.keywords)
	funky.getData(title, article, img, keywords);
	var arts = funky.postData();
	res.render('pages/posts', {posts: arts});
});

router.get('/delete',function(req,res) { 
	var arts = funky.postData();
	res.render('pages/delete', {posts: arts})
});

router.get('/delete/:title',function(req,res) { 
	var title = req.params.title;
	var arts = funky.postData();
	funky.deletePost(title);
	res.render('pages/posts', {posts: arts});
 });

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