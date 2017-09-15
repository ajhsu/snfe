'use strict';

export const SEARCH_PATTERN = /([\=|\[|\,|\(|\:|\!][\s]*)function\s+([\w]+)(\([\w|\,|\s]*?\2[\w|\,|\s]*?\))/g;
export const REPLACEMENT = '$1function$3';
export function snfe(input) {
  if ('undefined' == typeof input) {
    throw `input must be a string`;
    return ``;
  } else if (`` === input) {
    throw `input was empty`;
    return ``;
  }

  return input.replace(SEARCH_PATTERN, REPLACEMENT);
}
