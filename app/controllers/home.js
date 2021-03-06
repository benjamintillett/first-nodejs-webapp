var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
	db.Article.findAll().success(function (articles) {
		res.render('index', {
			title: 'Ben First Node.js app',
			articles: articles,
			id: req.session.user_id,
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
	current_user(req, function(user) {
		var article = db.Article.build({
			title: req.body.title,
			url: req.body.url,
			text: req.body.text,
			user: user
		});
		article.save().success(function() {
			db.Article.findAll().success(function (articles) {
				res.render('articles', {
					title: 'All them articles',
					articles: articles
				});
			});
		});
	});


});

router.get('/users/new', function (req, res, next) {
	db.Article.findAll().success(function (articles) {
		res.render('new_user', {
			title: 'New User in Here',
		});
	});
});

router.post('/users', function (req, res, next) {

	var user = db.User.build({name: req.body.name,
					password: req.body.password
					});
	user.save().success(function(user){
		req.session.user_id = user.id;
	});
	db.User.findAll().success(function (users) {
		res.render('users', {
			title: 'Users',
			users: users,
			dog: req.session.user_id
		});
	});
});

router.get('/users', function (req, res, next) {
	db.User.findAll().success(function (users) {
		res.render('users', {
			title: 'Users',
			users: users,
			dog: req.session.user_id
		});
	});
});



var current_user = function (request, callback) {
	db.User.find(request.session.user_id).success( function(user) {
		callback(user);
	});
}