var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';
    console.log(process.env.DATABASE_URL);
    console.log(env);
    console.log("-----"*10);

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
    port: process.env.PORT || 5000,
    db: "postgres://rwfhojwqybjeio:AvqZ_lPG1s81AHTdkvsnP-6BY1@ec2-54-225-156-230.compute-1.amazonaws.com:5432/d89aqiq18r1np0"
    
  }
};

module.exports = config[env];
