"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Script", {
  enumerable: true,
  get: function get() {
    return _script.Script;
  }
});
Object.defineProperty(exports, "Source", {
  enumerable: true,
  get: function get() {
    return _stages.Source;
  }
});
Object.defineProperty(exports, "Aggregator", {
  enumerable: true,
  get: function get() {
    return _stages.Aggregator;
  }
});
Object.defineProperty(exports, "Tally", {
  enumerable: true,
  get: function get() {
    return _stages.Tally;
  }
});
Object.defineProperty(exports, "Request", {
  enumerable: true,
  get: function get() {
    return _request.Request;
  }
});
exports.Ethereum = exports.Types = exports.TYPES = void 0;

var _script = require("./radon/script");

var _stages = require("./witnet/stages");

var _request = require("./witnet/request");

var Types = _interopRequireWildcard(require("./radon/types"));

exports.Types = Types;

var Ethereum = _interopRequireWildcard(require("./ethereum"));

exports.Ethereum = Ethereum;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TYPES = Types.TYPES;
exports.TYPES = TYPES;