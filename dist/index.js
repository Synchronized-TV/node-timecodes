'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
/* simple timecode<->time conversion */

var TIMECODE_REGEXP = /\d+\:\d+\:\d+\:\d+/;
var defaultFramerate = 25;

function padNumber(nb) {
    if (nb < 10) {
        nb = '0' + nb;
    }
    return nb;
}

exports['default'] = {

    /** converts time to timecode */
    fromSeconds: function fromSeconds(seconds) {
        var frameRate = arguments.length <= 1 || arguments[1] === undefined ? defaultFramerate : arguments[1];

        if (isNaN(seconds)) {
            throw new Error('seconds should be a number');
        }

        var seconds = parseFloat(seconds),
            ms = Math.round((seconds - parseInt(seconds, 10)) * 10000, 10) / 10000;

        var hours = parseInt(seconds / (60 * 60), 10),
            mins = parseInt(seconds / 60, 10) - hours * 60,
            secs = parseInt(seconds - hours * 3600 - mins * 60, 10),
            frame = Math.floor(Math.round(ms / (1 / frameRate) * 100) / 100);

        return padNumber(hours) + ':' + padNumber(mins) + ':' + padNumber(secs) + ':' + padNumber(frame);
    },

    /* converts timecode to time */
    toSeconds: function toSeconds(timecode) {
        var frameRate = arguments.length <= 1 || arguments[1] === undefined ? defaultFramerate : arguments[1];

        if (!TIMECODE_REGEXP.test(timecode)) {
            throw new Error('invalid timecode : ' + timecode);
        }
        if (typeof timecode === 'number') {
            return timecode;
        }
        var tc = timecode.split(':');

        return parseFloat(tc[0] * 60 * 60 + parseInt(tc[1], 10) * 60 + parseInt(tc[2], 10) + parseInt(tc[3], 10) / frameRate);
    }
};
module.exports = exports['default'];