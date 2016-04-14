'use strict';

import { defaultFramerate } from './constants';

function padNumber(nb, length = 2) {
  while ((''+nb).length < length) {
    nb = '0' + nb;
  }
  return nb;
}

/* converts time to timecode */
function fromSeconds(seconds, {frameRate = defaultFramerate, ms = false} = {}) {
  if (isNaN(seconds)) {
    throw new Error('seconds should be a number');
  }

  const _seconds = parseFloat(seconds),
  milliseconds = Math.round((_seconds - parseInt(_seconds, 10)) * 10000, 10) / 10;

  const hours = Math.floor(_seconds / (60 * 60), 10),
  mins = Math.floor(_seconds / 60, 10) - (hours * 60),
  secs = Math.floor(_seconds - (hours * 3600) - (mins * 60), 10),
  frame = Math.floor(Math.round(milliseconds / 1000 / (1 / frameRate) * 100) / 100);

  const suffix = ms && padNumber(parseInt(milliseconds, 10), 3) || padNumber(frame, 2);

  return padNumber(hours) + ':' + padNumber(mins) + ':' + padNumber(secs) + ':' + suffix;
}

export default fromSeconds;
