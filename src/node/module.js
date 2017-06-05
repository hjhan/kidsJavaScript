#!/usr/bin/env node

let name = 'steve'

function printName() {
    console.log(name);
    console.log(module);
}
printName()
exports.printName = printName;
module.exports.pritName = printName
console.log(module);