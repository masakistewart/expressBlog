var fs = require('fs');

var funky = {
	'getData': function(title, article, img, keywords) {
		var jsonFile = readAndReturn('articles.json');
		if(jsonFile.posts.length > 0) {
			jsonFile.posts.push(new MakeData(title, article, img, keywords));
			writeData(jsonFile);
		} else {
			jsonFile.posts.push(new MakeData(title, article, img, keywords));
			writeData(jsonFile);
		}
	},
	'postData': function() {
			var jsonFile = readAndReturn('articles.json');
			return jsonFile.posts;
	},
	'deletePost': function(title) {
		var jsonFile = readAndReturn('articles.json');
		var posts = jsonFile.posts;
		for (var i = 0; posts.length > i; i++) {
			if(posts[i].title === title){
				posts.splice(i, 1);
				jsonFile.posts = posts;
			}
		};
		writeData(jsonFile);
	},
	'parseKeyWords': function(str) {
		var arr = str.split(' ');
		return arr;
	},
	'findKeyWords': function(key){
		var jsonFile = readAndReturn('articles.json');
		var filterArr = [];
		for (var i = 0; i < jsonFile.posts.length; i++) {
			if(jsonFile.posts[i].keywords.length > 0) {
			 	for (var j = 0; j < jsonFile.posts[i].keywords.length; j++) {
			 		if(jsonFile.posts[i].keywords[j] === key){
			 			filterArr.push(jsonFile.posts[i])
			 		}
			 	}
			}
		};
		console.log(filterArr);
		return filterArr
	}
};

function readAndReturn(file) {
	var pre = fs.readFileSync(file);
	var processed = JSON.parse(pre);
	return processed
}

function writeData(obj) {
 var tmp = JSON.stringify(obj);
 fs.writeFile('./articles.json', tmp, function(err){
		if(err) throw err;
		console.log('data has been appended');
	});
}

function newDate() {
	return "" + new Date().getDate() + "-" +  new Date().getMonth() + '-' + new Date().getFullYear();
}

function MakeData(title, article, img, keywordsArr) {
		this.title = title;
		this.article =  article;
		this.img = img;
		this.keywords = keywordsArr;
		this.date = newDate();
};
module.exports = funky;