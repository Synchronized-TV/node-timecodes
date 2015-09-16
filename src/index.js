'use strict';

/* simple timecode<->time conversion */

import fromSeconds from './fromSeconds';
import toSeconds from './toSeconds';

export default {
  /* converts time to timecode */
  fromSeconds: fromSeconds,
  /* converts timecode to time */
  toSeconds: toSeconds
};
