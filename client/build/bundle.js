/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var request_helper = __webpack_require__(1)

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var request_helper = {
  getRequest: function (url, callback) {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", url)

    xhr.addEventListener("load", function () {
      var jsonString = xhr.responseText;
      var data = JSON.parse(jsonString);
      callback(data);
    })

    xhr.send();
  }
}

module.exports = request_helper;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map