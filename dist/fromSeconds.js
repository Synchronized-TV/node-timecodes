'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _constants = require('./constants');

function padNumber(nb) {
  var length = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

  while (('' + nb).length < length) {
    nb = '0' + nb;
  }
  return nb;
}

/* converts time to timecode */
function fromSeconds(seconds) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref$frameRate = _ref.frameRate;
  var frameRate = _ref$frameRate === undefined ? _constants.defaultFramerate : _ref$frameRate;
  var _ref$ms = _ref.ms;
  var ms = _ref$ms === undefined ? false : _ref$ms;

  var _seconds = parseFloat(seconds) || 0,
      milliseconds = Math.round((_seconds - parseInt(_seconds, 10)) * 10000, 10) / 10;

  var hours = Math.floor(_seconds / (60 * 60), 10),
      mins = Math.floor(_seconds / 60, 10) - hours * 60,
      secs = Math.floor(_seconds - hours * 3600 - mins * 60, 10),
      frame = Math.floor(Math.round(milliseconds / 1000 / (1 / frameRate) * 100) / 100);

  var suffix = ms && padNumber(parseInt(milliseconds, 10), 3) || padNumber(frame, 2);

  return padNumber(hours) + ':' + padNumber(mins) + ':' + padNumber(secs) + ':' + suffix;
}

exports['default'] = fromSeconds;
module.exports = exports['default'];