"use strict";

var RSS = require('rss');

var rssParser = require('rss-parser');

var fs = require('fs');

var xml2js = require('xml2js');

var sourceDir = "".concat(process.cwd(), "/sources/");

var transformXML = function transformXML(fileName) {
  return new Promise(function (resolve, reject) {
    var parser = new xml2js.Parser();
    fs.readFile("".concat(sourceDir, "/").concat(fileName, ".xml"), function (err, data) {
      if (err) {
        reject(err);
      }

      parser.parseString(data, function (err, result) {
        if (err) {
          reject(err);
        }

        resolve(result);
      });
    });
  });
};

var transformXMLOnline = function transformXMLOnline(data) {
  return new Promise(function (resolve, reject) {
    var parser = new xml2js.Parser();
    parser.parseString(data, function (err, result) {
      if (err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.bbcNews = function _callee(req, res, next) {
  var news;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('News ... ');
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(transformXML('bbc'));

        case 4:
          news = _context.sent;
          newsData = [news.rss.channel[0].item[0], news.rss.channel[0].item[1], news.rss.channel[0].item[2], news.rss.channel[0].item[3], news.rss.channel[0].item[4], news.rss.channel[0].item[5], news.rss.channel[0].item[6], news.rss.channel[0].item[6], news.rss.channel[0].item[7]];
          res.status(200).send({
            news: newsData
          });
          _context.next = 11;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 9]]);
};

exports.bbcNewsOnline = function _callee2(req, res, next) {
  var today, parser, feed, data;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          today = new Date() - 24 * 60 * 60 * 1000;
          parser = new rssParser();
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(parser.parseURL('https://feeds.bbci.co.uk/mundo/rss.xml'));

        case 5:
          feed = _context2.sent;
          data = feed.items.filter(function (item) {
            return Date.parse(item.pubDate) > today;
          });
          res.status(200).send({
            feed: data
          });
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](2);
          res.status(500).send({
            error: _context2.t0
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 10]]);
};

exports.hibrido = function (req, res, next) {
  console.log('News ... ');
  transformXML('hibrido');
};