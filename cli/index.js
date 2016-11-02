#!/usr/bin/env node
const path = require('path');
const pkg = require('../package');

const vfs = require('vinyl-fs');
const map = require('map-stream');

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

  const directory = path.resolve(process.cwd(), input);
  console.log('');
  console.log(' Install : Djiyo stylesheets are now being copied over to ');

  vfs.src('stylesheets/**/*')
    .pipe(map(function(file, cb) {
      const filename = file.path.substr(file.base.length);
      console.log(`    Copy : ${filename} `);
      cb(null, file);
    }))
    .pipe(vfs.dest(directory))
    .on('finish', () => {
      console.log(' Success : Djiyo stylesheets were successfully copied! ');
      console.log('');
    })
    .on('err', (err) => {
      console.log(err);
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

