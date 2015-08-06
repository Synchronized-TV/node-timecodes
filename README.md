# node-timecodes ![npm](https://img.shields.io/npm/v/node-timecodes.svg) ![license](https://img.shields.io/npm/l/node-timecodes.svg) ![github-issues](https://img.shields.io/github/issues/Synchronized-TV/node-timecodes.svg)

![nodei.co](https://nodei.co/npm/node-timecodes.png?downloads=true&downloadRank=true&stars=true)


Time and SMTPE Timecodes conversions

references :
 - [Apple cinematools](https://documentation.apple.com/en/cinematools/usermanual/index.html#chapter=2%26section=5%26tasks=true)
 - https://en.wikipedia.org/wiki/SMPTE_timecode

## Features

## Usage

```js
npm i -s node-timecode

var timecodes = require('node-timecodes');

timecodes.toSeconds('00:23:47:10'); // -> 1427.4

timecodes.fromSeconds(1427.4); // -> '00:23:47:10'

timecodes.fromSeconds(1427.4, 29.97); // -> '00:23:47:10'

```

## Scripts

 - **npm run readme** : `node ./node_modules/.bin/node-readme`
 - **npm run test** : `./node_modules/babel-tape-runner/bin/babel-tape-runner spec/**/*.spec.js | ./node_modules/.bin/tap-spec`
 - **npm run build** : `babel -d ./dist ./src`


## Author

Julien Bouquillon <julien.bouquillon@synchronized.tv> http://github.com/Synchronized-TV

## License

 - **MIT** : http://opensource.org/licenses/MIT
