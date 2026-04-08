const mongoose = require("mongoose");

const blogArticleSchema = new mongoose.Schema({

title:String,
description:String,
image:String,
date:String,
author:String

});

module.exports = mongoose.model("BlogArticle",blogArticleSchema);