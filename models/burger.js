var orm = require("../config/orm.js");


// create the code that will call the ORM functions using burger specific input for the ORM.



var burger = {
    all: function (cb) {
      orm.selectAll("burgers", function (res) {
        cb(res);
        console.log("result of burger specific is: " + JSON.stringify(res));
      });
    },

    insert: function (table, cols, vals, cb) {
      // orm.insertOne("burgers", "burger_name", vals, cb, function (res) {
      orm.insertOne("burgers","burger_name", vals, function (res) {
        cb(res);
      });
    },

      update: function (table, condition, id, cb) {
        orm.updateOne("burgers", condition, id, cb, function (res) {
          cb(res);
          console.log(JSON.stringify(res));
        });
      }
    };







    module.exports = burger;