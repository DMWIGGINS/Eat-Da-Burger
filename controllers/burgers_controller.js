var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js");



router.get("/", function (req, res) {
  burger.all(function (data) {
    console.log("what is data" + data);
    var burgerList = {
      burgers: data
    }

    console.log("data is: " + res);
    console.log(burgerList);
    res.render("index", burgerList);
  });
});

router.post("/api/burgers", function (req, res) {
  console.log("hi mom");
  burger.insert(["name"], [req.body.name], function (result) {
    res.json({
      id: result.insertId
    });
  });
});

// router.put("/api/burgers/:id", function (req, res) {
//   var id = req.params.id;

//   burger.update(function (data) {


//   });
//   console.log(burgerList);
//   res.render("index", burgerList);

// });







module.exports = router;