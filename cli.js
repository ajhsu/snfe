#!/usr/bin/env node

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _packageJson = require('./package.json');

var input = process.argv[2];

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
    console.log('snfe <input file> > <output file>');
    process.exit(0);
} else if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
    console.log(_packageJson.version);
    process.exit(0);
}

if (input) {
    process.stdout.write((0, _index2['default'])(_fs2['default'].readFileSync(input, 'utf8')).toString());
    process.exit(0);
}
