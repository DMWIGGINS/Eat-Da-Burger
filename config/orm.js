var connection = require("./connection.js");

var orm = {
  selectAll: function() {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },
  insertOne: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    console.log(queryString);

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      console.log(result);
    });
  },
  updateOne: function() {

  }
  
};

module.exports = orm;
