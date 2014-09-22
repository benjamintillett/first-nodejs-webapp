var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var article = db.Article.build({title: "Software is eating the world",
  			  url: "http://online.wsj.com/news/articles/SB10001424053111903480904576512250915629460",
  			  text: "A article abut the importance of software"
  			  });
  article.save();
  db.Article.findAll().success(function (articles) {
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

router.get('/articles', function (req, res, next) {
  db.Article.findAll().success(function (articles) {
    res.render('index', {
      title: 'All these articles',
      articles: articles
    });
  });
});

router.get('/articles/new', function (req, res, next) {
  db.Article.findAll().success(function (articles) {
    res.render('new_article', {
      title: 'New Article in Here',
		});
	});
});

router.post('/articles', function (req, res, next) {
  db.Article.findAll().success(function (articles) {
    res.render('new_article', {
      title: 'All them articles',
      articles: articles
    });
  });
});
