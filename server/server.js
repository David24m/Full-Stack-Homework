var express = require("express");
var app = express();

app.use(express.static(__dirname + "/../client/build"));

var games_router = require("./controller/games_controller.js");

app.use("/api/games", games_router);

app.listen(3000, function () {
  console.log("app running");
})
