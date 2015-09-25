#!/usr/bin/env node

'use strict';

import fromSeconds from './fromSeconds';

if (require.main === module) {
  if (process.argv.length < 3) {
    console.log('USAGE: timecodeFromSeconds seconds [frameRate]');
    throw 'No seconds parameter found';
  }
  console.log(fromSeconds(process.argv[2], process.argv[3]));
}
