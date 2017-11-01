#!/usr/bin/env node


'use strict';

var _fromSeconds = require('./fromSeconds');

var _fromSeconds2 = _interopRequireDefault(_fromSeconds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (require.main === module) {
  if (process.argv.length < 3) {
    console.log('USAGE: timecodeFromSeconds seconds [frameRate]');
    throw 'No seconds parameter found';
  }
  console.log((0, _fromSeconds2.default)(process.argv[2], process.argv[3]));
}