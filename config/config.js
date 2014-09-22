var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'nodejs'
    },
    port: 3000,
    db: 'postgres://localhost/nodejs-development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'nodejs'
    },
    port: 3000,
    db: 'postgres://localhost/nodejs-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'nodejs'
    },
    port: 3000,
    db: 'postgres://localhost/nodejs-production'
    
  }
};

module.exports = config[env];
