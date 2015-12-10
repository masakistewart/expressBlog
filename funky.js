var fs = require('fs');

var funky = {
	'getData': function(title, article, img) {
		var jsonFile = readAndReturn('articles.json');
		console.log(jsonFile);
		if(jsonFile.posts.length > 0) {
			jsonFile.posts.push(new MakeData(title, article, img));
			writeData(jsonFile);
		} else {
			jsonFile.posts.push(new MakeData(title, article, img));
			console.log(jsonFile);
			writeData(jsonFile);
		}
	},
	'postData': function() {
			var jsonFile = readAndReturn('articles.json');
			return jsonFile.posts;
	},
	'deletePost': function() {

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

function MakeData(title, article, img) {
		this.title = title;
		this.article =  article;
		this.img = img;
};
module.exports = funky;