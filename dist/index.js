'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* simple timecode<->time conversion */

var _fromSeconds = require('./fromSeconds');

var _fromSeconds2 = _interopRequireDefault(_fromSeconds);

var _toSeconds = require('./toSeconds');

var _toSeconds2 = _interopRequireDefault(_toSeconds);

exports['default'] = {
  /* converts time to timecode */
  fromSeconds: _fromSeconds2['default'],
  /* converts timecode to time */
  toSeconds: _toSeconds2['default']
};
module.exports = exports['default'];