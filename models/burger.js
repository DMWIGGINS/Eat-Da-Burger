var orm = require("../config/orm.js");


// create the code that will call the ORM functions using burger specific input for the ORM.



var burger = {
  all: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
      console.log("result of burger specific is: " + JSON.stringify(res));

    });
  },
  //   // The variables cols and vals are arrays.
  //   create: function(cols, vals, cb) {
  //     orm.create("cats", cols, vals, function(res) {
  //       cb(res);
  //     });
  //   },
  update: function (tableInput, isSnack, id, cb) {
    orm.updateOne("burgers", true, id, cb, function (res) {
      cb(res);
      console.log(JSON.stringify(res));
    });
  },

  insert: function (tableInput, colName, colValue, cb) {
    orm.insertOne("burgers", "burger_name", name, cb)
    cb(res);
    console.log(JSON.stringify(res));
  }

};







module.exports = burger;