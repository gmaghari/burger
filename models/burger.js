// Import the ORM to create functions to interface with db
var orm = require('../config/orm.js');

var burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(obj, condition, cb) {
    orm.updateOne('burgers', obj, condition, function(res) {

      cb(res);
    });
  }
};

// Export the database functions
module.exports = burger;