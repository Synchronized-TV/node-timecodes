'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _constants = require('./constants');

var TIMECODE_REGEXP = /\d+\:\d+\:\d+\:\d+/;

/* converts timecode to time */
function toSeconds(timecode) {
  var frameRate = arguments.length <= 1 || arguments[1] === undefined ? _constants.defaultFramerate : arguments[1];

  if (!TIMECODE_REGEXP.test(timecode)) {
    throw new Error('invalid timecode : ' + timecode);
  }
  if (typeof timecode === 'number') {
    return timecode;
  }
  var tc = timecode.split(':');

  return parseFloat(tc[0] * 60 * 60 + parseInt(tc[1], 10) * 60 + parseInt(tc[2], 10) + parseInt(tc[3], 10) / frameRate);
}

exports['default'] = toSeconds;
module.exports = exports['default'];