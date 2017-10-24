var MongoClient = require("mongodb").MongoClient;

var games_query_helper = {
  url: "mongodb://localhost:27017/gaming_site",
  all: function (onQueryFinished) {
    MongoClient.connect(this.url, function (err, db) {
      var gamesCollection = db.collection("games");

      gamesCollection.find().toArray(function (err, docs) {
        onQueryFinished(docs);
      })
    })
  }
}

module.exports = games_query_helper;
