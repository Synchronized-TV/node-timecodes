#! /usr/bin/env node

'use strict';

import toSeconds from './toSeconds';

if (require.main === module) {
  if (process.argv.length < 3) {
    console.log('USAGE: timecodeToSeconds timecode [frameRate]');
    throw 'No timecode parameter found';
  }
  console.log(toSeconds(process.argv[2], process.argv[3]));
}
