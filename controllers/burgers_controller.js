var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js");



router.get("/", function (req, res) {
  burger.all(function (data) {

    // var burgerList = JSON.stringify(data);
    
    var burgerList = {
      burgers: data
    }
    //       var burgerList = [];
    // for (i =0; i < burgers.data.length; i++) {
      // burgerList.push(burgers[i].burger_name);  
      // var burgerList = [];
      // for (i=0; i < )     
      console.log("data is: " + res);
      console.log(burgerList);
    res.render("index", burgerList);
  });
});

// router.post("/api/cats", function(req, res) {
//   cat.create([
//     "name", "sleepy"
//   ], [
//     req.body.name, req.body.sleepy
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
// });
// });






module.exports = router;