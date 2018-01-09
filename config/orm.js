var connection = require("../config/connection.js");

var orm = {

  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function (err, result) {
      if (err) {
        throw err;
      }
      console.log("result of cb from orm set up is: " + result);
      cb(result);

    });
  },

  insertOne: function (tableInput, colName, colValue, cb) {
    var queryString = "INSERT INTO ? (colName)"
    VALUES("colValue");

    console.log(queryString);

    connection.query(queryString, [tableInput, colName, colValue], function (err, result) {
      cb(result);
    });
  },
  updateOne: function (tableInput, isSnack, id, cb) {
    var queryString = "UPDATE ? SET ? WHERE ?";
    connection.query(queryString, [tableInput, isSnack, id], function (err, result) {
      if (err) {
        throw err;
      }
      console.log("burger is now in eaten column");
      cb(result);
    });
  },

};

module.exports = orm;