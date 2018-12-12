// Import the ORM to create functions to interface with db
var orm = require('../config/orm.js');


// Input burger info for ORM
var burger = {
    selectAll: function(callback){
        orm.selectAll(function(res){
        callback(res);
        });
    },

    insertOne: function(burger_name, callback){
        orm.insertOne(burger_name, function(res){
        callback(res);
        });
    },

    updateOne: function(burger_id, callback){
        orm.updateOne(burger_id, function(res){
        callback(res);
        });
    }
};

module.exports = burger;