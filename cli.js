#!/usr/bin/env node

'use strict';

const chalk = require('chalk');

const pre = chalk.cyan.bold('›');

const subject = process.argv[2];
const status = process.argv[3] || 'unknown';
const color = process.argv[4] || 'lightgrey';

if (!subject || subject === '-h' || subject === '--help') {
	console.log(`
  ${chalk.cyan('Generate link to Pixel-perfect, Retina-ready and Consistent Badges!')}

  Usage: qbl <subject> <status> <color>

  Options:

  ${pre} subject    Subject of the badge  ${chalk.dim('[could be any]')}
  ${pre} status     Status of the badge   ${chalk.dim('[could by any]')}
  ${pre} color      Color of the badge    ${chalk.dim('[specific]')}

  Colors Available:

  ${pre} brightgreen  ${pre} green  ${pre} yellowgreen  ${pre} yellow
  ${pre} orange       ${pre} red    ${pre} lightgrey    ${pre} blue

  Help:

  $ qbl build unknown
  $ qbl build passing green
  `);
	process.exit(1);
}

const buildLink = `https://img.shields.io/badge/${subject}-${status}-${color}.svg`;

console.log(`
  ${pre}${pre} ${buildLink}

  Styles:

  ${pre} ${chalk.dim(`Plastic      : ${buildLink}?style=plastic`)}
  ${pre} ${chalk.dim(`Flast        : ${buildLink}?style=flat`)}
  ${pre} ${chalk.dim(`Flat-Squoare : ${buildLink}?style=flat-square`)}
  ${pre} ${chalk.dim(`Social       : ${buildLink}?style=social`)}

`);
