#!/usr/bin/env node


'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _toSeconds = require('./toSeconds');

var _toSeconds2 = _interopRequireDefault(_toSeconds);

if (require.main === module) {
  if (process.argv.length < 3) {
    console.log('USAGE: timecodeToSeconds timecode [frameRate]');
    throw 'No timecode parameter found';
  }
  console.log((0, _toSeconds2['default'])(process.argv[2], process.argv[3]));
}