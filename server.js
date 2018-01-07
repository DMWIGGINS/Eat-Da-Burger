

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var app = express();
 

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
app.set("view engine", "handlebars");
// need to amend these
var routes = require("./controllers/burger_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


 
