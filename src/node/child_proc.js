#!/usr/bin/env node
let exec = require('child_process').exec;
let child = exec('ls -l');

child.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});

child.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});

child.on('close', function (code) {
    console.log('closing code: ' + code);
})
console.log('hello ');