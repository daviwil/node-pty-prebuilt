'use strict'

const os = require('os');
const path = require('path');
const spawn = require('child_process').spawn;

const p = spawn(os.platform() === 'win32' ? 'node-gyp.cmd' : 'node-gyp', ['rebuild', '--build_v8_with_gn=false'], {
  cwd: path.join(__dirname, '..'),
  stdio: 'inherit'
});

p.on('exit', function (code) {
  process.exit(code);
});
