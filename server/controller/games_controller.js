var games_query_helper = require("../db/games_query_helper.js");
var express = require("express");
var games_router = express.Router();

games_router.get("/", function (req, res) {

  games_query_helper.all(function (games) {
    res.json(games)
  })

})

module.exports = games_router;
