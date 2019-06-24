# node-timecodes ![npm](https://img.shields.io/npm/v/node-timecodes.svg) ![license](https://img.shields.io/npm/l/node-timecodes.svg) ![github-issues](https://img.shields.io/github/issues/Synchronized-TV/node-timecodes.svg)

![nodei.co](https://nodei.co/npm/node-timecodes.png?downloads=true&downloadRank=true&stars=true)


Time and SMTPE Timecodes conversions

references :
 - [Apple cinematools](https://documentation.apple.com/en/cinematools/usermanual/index.html#chapter=2%26section=5%26tasks=true)
 - https://en.wikipedia.org/wiki/SMPTE_timecode

## Usage

Install with `npm i -s node-timecodes`

```js
var timecodes = require('node-timecodes');

timecodes.toSeconds('00:23:47:10'); // -> 1427.4

timecodes.fromSeconds(1427.4); // -> '00:23:47:10'

// you can use a specific frameRate
timecodes.fromSeconds(1427.4, {
  frameRate: 29.97
}); // -> '00:23:47:11'

// use ms format for WebVTT timestamps
timecodes.fromSeconds(1427.4, {
  ms: true
}); // -> '00:23:47:400'

// change default framerate to all methods
timecodes.constants.framerate = 29.97
timecodes.fromSeconds(1427.4); // -> '00:23:47:11'
```

Run as CLI :

```sh
$ timecodeFromSeconds 1427.4
# 00:23:47:10

$ timecodeToSeconds 00:23:47:10
# 1427.4
```

## Scripts

 - **npm run test** : `./node_modules/babel-tape-runner/bin/babel-tape-runner spec/**/*.spec.js | ./node_modules/.bin/tap-spec`
 - **npm run build** : `babel src --out-dir dist`

## Author

[Synchronized team](http://github.com/Synchronized-TV) and [awesome contributors](https://github.com/Synchronized-TV/node-timecodes/graphs/contributors)

## License

 - **MIT** : http://opensource.org/licenses/MIT
