#!/usr/bin/env node
var EventEmitter = require('events').EventEmitter;

class Dog extends EventEmitter {
    constructor(name) {
        super();  //must call super
        this.name = name;
    }
}
// Dog.prototype.__proto__ = EventEmitter.prototype;
// 另一种写法
// Dog.prototype = Object.create(EventEmitter.prototype);

var simon = new Dog('Snoopy');

simon.on('bark', function () {
    console.log(this.name + ' barked');
});

setInterval(function () {
    simon.emit('bark');
}, 500);
