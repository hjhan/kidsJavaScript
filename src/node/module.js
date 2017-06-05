#!/usr/bin/env node

//redux middleware
const logger = a => b => c => {
    console.info('dispatching', c)
}

logger(1)(2)(3);

let name = 'steve';

console.log(require);
console.log(this);
function printName() {

    console.log(this);
    console.log(name);
    console.log(module);
}
printName()
exports.printName = printName;
module.exports.pritName = printName
console.log(module);