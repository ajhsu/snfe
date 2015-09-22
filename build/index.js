'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.snfe = snfe;
var SEARCH_PATTERN = /([\=|\[|\,|\(|\:|\!][\s]*)function\s+([\w]+)(\([\w|\,|\s]*?\2[\w|\,|\s]*?\))/g;
exports.SEARCH_PATTERN = SEARCH_PATTERN;
var REPLACEMENT = '$1function$3';
exports.REPLACEMENT = REPLACEMENT;

function snfe(input) {

    if ('undefined' == typeof input) {
        throw 'input must be a string';
        return '';
    } else if ('' === input) {
        throw 'input was empty';
        return '';
    }

    return input.replace(SEARCH_PATTERN, REPLACEMENT);
}

;
