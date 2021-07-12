"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var engine = '192.168.0.27'; // unreal engine ip

var api = '192.168.0.27'; // Node Api ip

var unreal = _axios["default"].create({
  baseURL: "http://".concat(engine, ":30010/remote/object/"),
  headers: {
    'Content-Type': 'application/json'
  }
});

var hidromet = _axios["default"].create({
  baseURL: "http://".concat(api, ":4000/hidromet"),
  headers: {
    'Content-Type': 'application/json'
  }
});

var xml = _axios["default"].create({
  baseURL: "http://".concat(api, ":4000/xml"),
  headers: {
    'Content-Type': 'application/json'
  }
});

var connection = {
  unreal: unreal,
  hidromet: hidromet,
  xml: xml
};
var _default = connection;
exports["default"] = _default;