'use strict';

/* simple timecode<->time conversion */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

var _fromSeconds = require('./fromSeconds');

var _fromSeconds2 = _interopRequireDefault(_fromSeconds);

var _toSeconds = require('./toSeconds');

var _toSeconds2 = _interopRequireDefault(_toSeconds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  /* converts time to timecode */
  fromSeconds: _fromSeconds2.default,
  /* converts timecode to time */
  toSeconds: _toSeconds2.default,
  /* set the default constants */
  constants: _constants2.default
};
module.exports = exports['default'];