"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newsBBC_v2 = exports.newsBBC = exports.newBBC = void 0;

var _config = _interopRequireDefault(require("../config"));

var _martillo = require("./martillo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// unreal
// const objectPathMArtillo = "/Game/Hunter_Game_Levels/DEV_Testing.DEV_Testing:PersistentLevel.FeedUpActor3_8";
// const objectPathMArtilloInGame = "/Game/Hunter_Game_Levels/UEDPIE_0_DEV_Testing.DEV_Testing:PersistentLevel.FeedUpActor3_8";
var enviarPeticion = function enviarPeticion(tipoPeticion, data) {
  var response;
  return regeneratorRuntime.async(function enviarPeticion$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_config["default"].unreal.put(tipoPeticion, data));

        case 3:
          response = _context.sent;
          console.log('reponse : ', response);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log('Error : ', _context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

var newBBC = function newBBC(dataNew) {
  var link, title, content, pubDate, data;
  return regeneratorRuntime.async(function newBBC$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          link = dataNew.link, title = dataNew.title, content = dataNew.content, pubDate = dataNew.pubDate;

          try {
            data = {
              "objectPath": "/Game/Hunter_Game_Levels/UEDPIE_0_DEV_Testing.DEV_Testing:PersistentLevel.BBCNew_3",
              "functionName": "getNoticia",
              "Parameters": {
                "titulo": title,
                "info": content,
                "fecha": pubDate
              },
              "generateTransaction": true
            };
            enviarPeticion('/call', data);
            console.log(' Enviando a unreal : ', data);
          } catch (error) {
            console.log(' error : ', error.response);
          }

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.newBBC = newBBC;

var newsBBC = function newsBBC(dataNews) {
  var titulos, descripciones, fechas, data;
  return regeneratorRuntime.async(function newsBBC$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          titulos = [];
          descripciones = [];
          fechas = [];
          dataNews.forEach(function (element) {
            titulos.push(element.title);
            descripciones.push(element.content);
            fechas.push(element.isoDate);
          });

          try {
            data = {
              "objectPath": "/Game/Hunter_Game_Levels/UEDPIE_0_DEV_Testing.DEV_Testing:PersistentLevel.BBCNew_3",
              "functionName": "getNoticiasV2",
              "Parameters": {
                "titulares": titulos,
                "infos": descripciones,
                "fechas": fechas
              },
              "generateTransaction": true
            };
            enviarPeticion('/call', data);
            console.log(' Enviando a unreal : ', data);
          } catch (error) {
            console.log(' error : ', error);
          }

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.newsBBC = newsBBC;

var newsBBC_v2 = function newsBBC_v2(dataNews) {
  var data;
  return regeneratorRuntime.async(function newsBBC_v2$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          try {
            data = {
              "objectPath": "/Game/Hunter_Game_Levels/UEDPIE_0_DEV_Testing.DEV_Testing:PersistentLevel.BBCNew_3",
              "functionName": "getNoticiasV2",
              "Parameters": {
                "noticiasBBC": dataNews
              },
              "generateTransaction": true
            };
            enviarPeticion('/call', data);
            console.log(' Enviando a unreal v2: ', data);
          } catch (error) {
            console.log(' error : ', error);
          }

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.newsBBC_v2 = newsBBC_v2;