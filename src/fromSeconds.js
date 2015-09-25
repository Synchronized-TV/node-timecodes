'use strict';

import { defaultFramerate } from './constants';

function padNumber(nb) {
  if (nb < 10) {
    nb = '0' + nb;
  }
  return nb;
}

/* converts time to timecode */
function fromSeconds(seconds, frameRate = defaultFramerate) {
  if (isNaN(seconds)) {
    throw new Error('seconds should be a number');
  }

  const _seconds = parseFloat(seconds),
  ms = Math.round((_seconds - parseInt(_seconds, 10)) * 10000, 10) / 10000;

  const hours = parseInt(_seconds / (60 * 60), 10),
  mins = parseInt(_seconds / 60, 10) - (hours * 60),
  secs = parseInt(_seconds - (hours * 3600) - (mins * 60), 10),
  frame = Math.floor(Math.round(ms / (1 / frameRate) * 100) / 100);

  return padNumber(hours) + ':' + padNumber(mins) + ':' + padNumber(secs) + ':' + padNumber(frame);
}

export default fromSeconds;
