"use strict";

var _this = this;

module.exports = function callee$0$0(_ref) {
  var container = _ref.container;
  var mongooseLoader;
  return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        mongooseLoader = require("./mongoose");
        context$1$0.next = 3;
        return regeneratorRuntime.awrap(mongooseLoader());

      case 3:

        console.log("🧠 Custom loaders initialized");

      case 4:
      case "end":
        return context$1$0.stop();
    }
  }, null, _this);
};