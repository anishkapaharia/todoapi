'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.todosDELETE = function todosDELETE (req, res, next) {
  Default.todosDELETE(req.swagger.params, res, next);
};

module.exports.todosGET = function todosGET (req, res, next) {
  Default.todosGET(req.swagger.params, res, next);
};

module.exports.todosPOST = function todosPOST (req, res, next) {
  Default.todosPOST(req.swagger.params, res, next);
};

module.exports.todosPUT = function todosPUT (req, res, next) {
  Default.todosPUT(req.swagger.params, res, next);
};
