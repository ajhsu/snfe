#!/usr/bin/env node

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _packageJson = require('./package.json');

var printHelpMesage = function printHelpMesage() {
    console.log('\nStrip Named Function Expression\n');
    console.log('Usage:\n');
    console.log('   snfe [input file] > [output file]');
    console.log('\n' + _packageJson.name + '@' + _packageJson.version + ' ' + process.argv[1] + '\n');
};

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1 || process.argv.length === 2) {
    printHelpMesage();
    process.exit(0);
} else if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
    console.log(_packageJson.version);
    process.exit(0);
}

var input = process.argv[2];

if (input) {
    var inputString = _fs2['default'].readFileSync(input, 'utf8');
    var result = (0, _index2['default'])(inputString);
    process.stdout.write(result);
    process.exit(0);
}

process.exit(0);
