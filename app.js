var express = require('express'),
  config = require('./config/config'),
  db = require('./app/models');

var cookieParser = require('cookie-parser')
var session = require('express-session')

var app = express();
app.use(cookieParser())
app.use(session({secret: 'keyboard cat',
                 resave: true,
                 saveUninitialized: true
}));

require('./config/express')(app, config);

db.sequelize
  .sync()
  .complete(function (err) {
    if(err){
      throw err[0];
    }else{
      app.listen(config.port);
    }
  });

