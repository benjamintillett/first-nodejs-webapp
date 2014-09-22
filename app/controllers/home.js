var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {		
  db.Article.findAll().success(function (articles) {
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

router.get('/articles', function (req, res, next) {
  db.Article.findAll().success(function (articles) {
    res.render('articles', {
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
  var text = req.body.text
  var article = db.Article.build({title: req.body.title,
  			  url: req.body.url,
  			  text: req.body.text
  			  });
  article.save();

  db.Article.findAll().success(function (articles) {
    res.render('articles', {
      title: 'All them articles',
      articles: articles
    });
  });
});
