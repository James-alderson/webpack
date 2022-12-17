/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/advice.js ***!
  \**************************/
var PARAGRAPH = document.querySelector("p");
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.adviceslip.com/advice");
xhr.send();
xhr.onload = function () {
  if (xhr.status != 200) {
    console.log("Error ".concat(xhr.status, ": ").concat(xhr.statusText));
  } else {
    var adv = JSON.parse(this.responseText);
    console.log(adv.slip.advice);
    PARAGRAPH.textContent = adv.slip.advice;
  }
};
/******/ })()
;
//# sourceMappingURL=advice.bundle.js.map