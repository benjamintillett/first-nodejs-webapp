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
  // article.complete(function(err) {
  // 	if (!!err) {
  // 		console.log("The instance has not been saved:",err)
  // 	} else {
  // 		console.log("We have a persisited instance now")
  // 	}
  // });

  db.Article.findAll().success(function (articles) {
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});
