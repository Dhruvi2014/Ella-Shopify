const BlogArticle = require("../models/blogArticleModel");

exports.getBlogArticles = async(req,res)=>{

try{

const blogs = await BlogArticle.find();

res.json(blogs);

}catch(error){

res.status(500).json({message:error.message});

}

};


exports.addBlogArticle = async(req,res)=>{

try{

const blog = new BlogArticle(req.body);

await blog.save();

res.json(blog);

}catch(error){

res.status(500).json({message:error.message});

}

};