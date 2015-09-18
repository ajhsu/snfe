#!/usr/bin/env node
'use strict';
import fs from 'fs';
import strip from'./index';
import { version } from './package.json';

let input = process.argv[2];

if (process.argv.indexOf(`-h`) !== -1 || 
    process.argv.indexOf(`--help`) !== -1) {
    console.log(`snfe <input file> > <output file>`);
    process.exit(0);
} else if (process.argv.indexOf(`-v`) !== -1 ||
    process.argv.indexOf(`--version`) !== -1) {
    console.log(version);
    process.exit(0);
}

if (input) {
    process.stdout.write(strip(fs.readFileSync(input, `utf8`)).toString());
    process.exit(0);
}