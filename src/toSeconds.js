'use strict';

import { framerate as defaultFramerate } from './constants';

const TIMECODE_REGEXP = /\d+\:\d+\:\d+\:\d+/;

/* converts timecode to time */
function toSeconds(timecode, frameRate = defaultFramerate){
  if (!TIMECODE_REGEXP.test(timecode)) {
    throw new Error('invalid timecode : ' + timecode);
  }
  if (typeof timecode === 'number') {
    return timecode;
  }
  const tc = timecode.split(':');

  return parseFloat(tc[0] * 60 * 60 + parseInt(tc[1], 10) * 60 + parseInt(tc[2], 10) + parseInt(tc[3], 10) / frameRate);
}

export default toSeconds;
