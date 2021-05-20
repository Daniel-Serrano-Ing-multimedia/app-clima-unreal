"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultText = exports.embalseUnreal = exports.pronostico = void 0;

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

var pronostico = function pronostico(region) {
  var result, _pronostico, mensaje, data;

  return regeneratorRuntime.async(function pronostico$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_config["default"].hidromet.get("/pronostico/".concat(region)));

        case 3:
          result = _context2.sent;
          _pronostico = result.data.pronostico;
          (0, _martillo.Mensaje)("pronostico Manana :  ".concat(_pronostico[0].tiempo_manana)); //

          mensaje = "pronostico Manana :  ".concat(_pronostico[0].tiempo_manana);
          data = {
            "objectPath": "/Game/Hunter_Game_Levels/UEDPIE_0_DEV_Testing.DEV_Testing:PersistentLevel.Text3D_2",
            "functionName": "EnviarTexto",
            "Parameters": {
              "Txt": mensaje
            },
            "generateTransaction": true
          };
          enviarPeticion('/call', data);
          _context2.next = 14;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.log(' error : ', _context2.t0.response);

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

exports.pronostico = pronostico;

var embalseUnreal = function embalseUnreal(dataEmbalse) {
  var descripEmbalse, fechaUltimaLecturaEmbalse, horaUltimaLecturaEmbalse, nivelActualEmbalse, nivelMaximoEmbalse, nivelMinimoEmbalse, data;
  return regeneratorRuntime.async(function embalseUnreal$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          descripEmbalse = dataEmbalse.descripEmbalse, fechaUltimaLecturaEmbalse = dataEmbalse.fechaUltimaLecturaEmbalse, horaUltimaLecturaEmbalse = dataEmbalse.horaUltimaLecturaEmbalse, nivelActualEmbalse = dataEmbalse.nivelActualEmbalse, nivelMaximoEmbalse = dataEmbalse.nivelMaximoEmbalse, nivelMinimoEmbalse = dataEmbalse.nivelMinimoEmbalse;

          try {
            data = {
              "objectPath": "/Game/Hunter_Game_Levels/UEDPIE_0_DEV_Testing.DEV_Testing:PersistentLevel.Embalses",
              "functionName": "ObtenerEmbalse",
              "Parameters": {
                "embalse": descripEmbalse,
                "max": nivelMaximoEmbalse,
                "current": nivelActualEmbalse,
                "min": nivelMinimoEmbalse
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
          return _context3.stop();
      }
    }
  });
};

exports.embalseUnreal = embalseUnreal;

var defaultText = function defaultText(text) {
  var data;
  return regeneratorRuntime.async(function defaultText$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          try {
            data = {
              "objectPath": "/Game/Hunter_Game_Levels/UEDPIE_0_DEV_Testing.DEV_Testing:PersistentLevel.Text3D_2",
              "functionName": "EnviarTexto",
              "Parameters": {
                "Txt": text
              },
              "generateTransaction": true
            };
            enviarPeticion('/call', data);
          } catch (error) {
            console.log(' error : ', error.response);
          }

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.defaultText = defaultText;