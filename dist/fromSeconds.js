#! /usr/bin/env node


'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _constants = require('./constants');

function padNumber(nb) {
  if (nb < 10) {
    nb = '0' + nb;
  }
  return nb;
}

/* converts time to timecode */
function fromSeconds(seconds) {
  var frameRate = arguments.length <= 1 || arguments[1] === undefined ? _constants.defaultFramerate : arguments[1];

  if (isNaN(seconds)) {
    throw new Error('seconds should be a number');
  }

  var _seconds = parseFloat(seconds),
      ms = Math.round((_seconds - parseInt(_seconds, 10)) * 10000, 10) / 10000;

  var hours = parseInt(_seconds / (60 * 60), 10),
      mins = parseInt(_seconds / 60, 10) - hours * 60,
      secs = parseInt(_seconds - hours * 3600 - mins * 60, 10),
      frame = Math.floor(Math.round(ms / (1 / frameRate) * 100) / 100);

  return padNumber(hours) + ':' + padNumber(mins) + ':' + padNumber(secs) + ':' + padNumber(frame);
}

exports['default'] = fromSeconds;
module.exports = exports['default'];