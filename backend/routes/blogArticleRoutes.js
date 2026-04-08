const express = require("express");
const router = express.Router();

const blogArticleController = require("../controllers/blogArticleController");

router.get("/blog-articles",blogArticleController.getBlogArticles);

router.post("/blog-articles",blogArticleController.addBlogArticle);

module.exports = router;