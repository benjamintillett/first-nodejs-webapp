module.exports = function (sequelize, DataTypes) {

  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
	}, {
		classMethods: {
			associate: function(models) {
				User.hasMany(models.Article)
			}
		}
	});

  return User;
};

