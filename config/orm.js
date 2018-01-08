var connection = require("./connection.js");

var orm = {

  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function (err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result);
    });
  },
  // selectAll: function (whatToSelect, cb) {
  //   var queryString = "SELECT * FROM ??";
  //   connection.query(queryString, [whatToSelect], function (err, result) {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log(result);
  //   });
  // },
  // insertOne: function (tableInput, colToSearch, valOfCol) {
  //   var queryString = "SELECT * FROM ?? WHERE ?? = ?";

  //   console.log(queryString);

  //   connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
  //     console.log(result);
  //   });
  // },
  // updateOne: function () {

  // }

};

module.exports = orm;