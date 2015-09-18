'use strict';

export default function stripNamedFunction(input) {
    return input.replace(/([\=|\[|\,|\(|\:|\!])[\s]*function\s+([\w]+)(\([\w|\,|\s]*?\2[\w|\,|\s]*?\))/g, '$1function$3');
};