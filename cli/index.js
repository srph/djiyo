#!/usr/bin/env node
const path = require('path');
const pkg = require('../package');

const vfs = require('vinyl-fs');
const log = require('./log');

// CLI Updater
const notifier = require('update-notifier');
notifier({ pkg: pkg }).notify();

// CLI Parser
const minimist = require('minimist');
const argv = minimist(process.argv.slice(2));
const command = argv._[0];
const help = require('./help');

if ( command === 'install' ) {
  const input = argv._[1];

  if ( !input ) {
    help();
    process.exit();
  }

  console.log(' Install : Djiyo stylesheets are now being copied over to', input);

  vfs.src(path.resolve(__dirname, '../stylesheets/**/*.scss'))
    .pipe(log)
    .pipe(vfs.dest(input))
    .on('finish', () => {
      console.log(' Success : Djiyo stylesheets were successfully copied! ');
      console.log('');
    })
    .on('error', (err) => {
      console.log('   Error : ', err);
    });
}

else if ( argv.v || argv.version || command === 'version' ) {
  console.log(`
    djiyo v${pkg.version}
  `);
}

else {
  help();
}

