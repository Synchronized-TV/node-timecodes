'use strict';

import test from 'tape';
import { fromSeconds } from '../dist';

function roundTime(time) {
  return Math.round(parseFloat(time) * 10000) / 10000;
}


test('fromSeconds (SMTPE)', t => {


  const tests = [
    // using default at 25fps
    ['00:00:00:00', 0.000225, 25],
    ['00:00:00:00', 0, 25],
    ['00:00:00:01', 0.04, 25],
    ['00:00:00:02', 0.08, 25],
    ['00:00:00:10', 0.4, 25],
    ['00:00:01:00', 1, 25],
    ['00:01:01:00', 61, 25],
    ['01:01:01:00', 3661, 25],
    ['01:10:31:00', 4231, 25],
    ['00:23:47:10', 1427.4, 25],
    ['99:59:59:00', 359999, 25],
    ['99:59:59:10', 359999.4, 25],
    ['99:59:59:24', 359999.98, 25],
    // 29.97
    ['00:00:00:00', 0.000225, 29.97],
    ['00:00:00:00', 0, 29.97],
    ['00:00:00:01', 1000 / 29.97 / 1000 * 1, 29.97],
    ['00:00:00:02', 1000 / 29.97 / 1000 * 2, 29.97],
    ['00:00:00:10', 1000 / 29.97 / 1000 * 10, 29.97],
    ['00:00:00:25', 1000 / 29.97 / 1000 * 25, 29.97],
    ['00:00:00:26', 1000 / 29.97 / 1000 * 26, 29.97],
    ['00:00:00:27', 1000 / 29.97 / 1000 * 27, 29.97],
    ['00:00:01:00', 1, 29.97],
    ['00:01:01:00', 61, 29.97],
    ['01:01:01:00', 3661, 29.97],
    ['01:10:31:00', 4231, 29.97],
    ['99:59:59:00', 359999, 29.97],
    ['99:59:59:29', 1000 / 29.97 / 1000 * 29 + 359999, 29.97]

  ];

  tests.forEach(sample => {
    const expected = sample[0],
    actual = fromSeconds(roundTime(sample[1]), {
      frameRate: sample[2]
    });

    t.equal(actual, expected, `${roundTime(sample[1])} -> ${expected} (${sample[2]}fps)`);
  });

  t.end();
});

test('toSeconds with invalid values', t => {
  [undefined, 0, 'abc', [], {}, null].forEach(invalid => {
    t.equal(fromSeconds(invalid), '00:00:00:00', `${invalid} should return 00:00:00:00`);
    t.equal(fromSeconds(invalid, {ms: true}), '00:00:00:000', `${invalid} should return 00:00:00:000 (ms=true)`);
  });
  t.end();
});

test('fromSeconds (ms format)', t => {

  const tests = [
    ['00:00:00:000', 0.000225],
    ['00:00:00:000', 0],
    ['00:00:00:040', 0.04],
    ['00:00:00:080', 0.08],
    ['00:00:00:400', 0.4],
    ['00:00:01:000', 1],
    ['00:01:01:000', 61],
    ['00:01:01:050', 61.05],
    ['00:01:01:951', 61.951],
    ['01:01:01:000', 3661],
    ['01:10:31:000', 4231],
    ['00:23:47:400', 1427.4],
    ['99:59:59:000', 359999],
    ['99:59:59:400', 359999.4],
    ['99:59:59:980', 359999.98],
    ['00:01:19:186', 79.186432]
  ];


  tests.forEach(sample => {
    const expected = sample[0],
    actual = fromSeconds(roundTime(sample[1]), {
      ms: true
    });

    t.equal(actual, expected, `${roundTime(sample[1])} -> ${expected}`);
  });

  t.end();
});
