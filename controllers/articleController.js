const Article = require('../models/Article');

exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};

exports.createArticle = async (req, res) => {
  const { title, content} = req.body;
  // console.log(req.user)
  try {
    const newArticle = new Article({ title, content, author:req.user.id });
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};
