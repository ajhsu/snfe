'use strict';

export default function stripNamedFunctionExpression(input) {

    if ('undefined' == typeof input) {
        throw `input must be a string`;
        return ``;
    } else if (`` === input) {
        throw `input was empty`;
        return ``;
    }

    return input.replace(/([\=|\[|\,|\(|\:|\!][\s]*)function\s+([\w]+)(\([\w|\,|\s]*?\2[\w|\,|\s]*?\))/g, '$1function$3');
};