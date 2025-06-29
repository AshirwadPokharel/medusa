"use strict";

var _this = this;

var mongoose = require("mongoose");

module.exports = function callee$0$0() {
  return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.prev = 0;
        context$1$0.next = 3;
        return regeneratorRuntime.awrap(mongoose.connect(process.env.DATABASE_URL || "mongodb://localhost:27017/calculator"));

      case 3:
        console.log("MongoDB connected");
        context$1$0.next = 9;
        break;

      case 6:
        context$1$0.prev = 6;
        context$1$0.t0 = context$1$0["catch"](0);

        console.error("MongoDB connection failed:", context$1$0.t0);

      case 9:
      case "end":
        return context$1$0.stop();
    }
  }, null, _this, [[0, 6]]);
};