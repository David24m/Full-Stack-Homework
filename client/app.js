var request_helper = require("./helper/request_helper.js")

window.addEventListener("DOMContentLoaded", function () {
  request_helper.getRequest("http://localhost:3000/api/games", function (games) {

    var mainDiv = document.getElementById("main");

    var list = document.createElement("ul");

    games.forEach(function (game) {

      var listItem = document.createElement("li")
      listItem.innerText = game.title

      var listItem2 = document.createElement("li")
      listItem2.innerText = game.lead_character

      listItem.appendChild(listItem2)

      var listItem3 = document.createElement("li")
      listItem3.innerText = game.genre

      listItem2.appendChild(listItem3)

      list.appendChild(listItem);
    })

    mainDiv.appendChild(list);

  })
})
