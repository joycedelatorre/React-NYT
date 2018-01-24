const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	title:{
		type:String,
		required:true,
	},
	date:{
		type:String,
		required:true
	}, 
	url:{
		type:String,
		require:true
	}
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;