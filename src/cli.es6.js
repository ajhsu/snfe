#!/usr/bin/env node
'use strict';
import fs from 'fs';
import snfe from './index';
import { name, version } from './package.json';

let printHelpMesage = () => {
    console.log(`\nStrip Named Function Expression\n`);
    console.log(`Usage:\n`);
    console.log(`   snfe [input file] > [output file]`);
    console.log(`\n${name}@${version} ${process.argv[1]}\n`);
};

if (process.argv.indexOf(`-h`) !== -1 || 
    process.argv.indexOf(`--help`) !== -1 ||
    process.argv.length === 2 ) {
    printHelpMesage();
    process.exit(0);
} else if (process.argv.indexOf(`-v`) !== -1 || process.argv.indexOf(`--version`) !== -1) {
    console.log(version);
    process.exit(0);
}


let input = process.argv[2];

if (input) {
    let inputString = fs.readFileSync(input, `utf8`);
    let result = snfe(inputString);
    process.stdout.write(result);
    process.exit(0);
}

process.exit(0);