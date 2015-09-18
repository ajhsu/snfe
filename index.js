'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = stripNamedFunction;

function stripNamedFunction(input) {
    return input.replace(/([\=|\[|\,|\(|\:|\!])[\s]*function\s+([\w]+)(\([\w|\,|\s]*?\2[\w|\,|\s]*?\))/g, '$1function$3');
}

;
module.exports = exports['default'];
