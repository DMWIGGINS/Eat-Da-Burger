var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js");



router.get("/", function (req, res) {
  burger.all(function (data) {

    var burgerList = {
      burgers: data
    }

    console.log("data is: " + res);
    console.log(burgerList);
    res.render("index", burgerList);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create([
    "name"
  ], [
    req.body.name,
  ], function (result) {
    res.json({
      id: result.insertId
    });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var id = req.params.id;

  burger.updateOne(function (data) {

    var burgerList = {
      burgers: data
    }
  });
  console.log(burgerList);
  res.render("index", burgerList);

});







module.exports = router;