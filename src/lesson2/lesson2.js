/**
 * if else
 */
let age = 10;
if (age >= 18) {
    console.log("成年人");
} else {
    console.log("青少年，幼儿");
}

/**
 * while
 */

var i = 0;

while (i < 100) {
    console.log('i当前为：' + i);
    i += 1;
}

/**
 * for loop 判断偶数 或 质数/素数
 */



typeof 2323;   //'number'
typeof "String in quotes";   //'string'
/**
 * window(browser) or global (node)  NaN, Infinity
 */

typeof NaN;    //'number'

NaN !== NaN;      //true

Number.isNaN("dfjk");   //false  only NaN true

Number("xyz");  //NaN;

3/0;  //Infinity

Infinity - Infinity;   //NaN
Infinity + Infinity;   //Infinity
Infinity / Infinity;   //NaN
Infinity * Infinity;     //Infinity

/**
 * differences of let and var, scope and hoisting for var
 */
{ let n1 = 5; console.log(n1); }  console.log(n1);

{ var n1 = 5; console.log(n1); }  console.log(n1);


console.log(n3); let n3 = 100;    // Uncaught ReferenceError: n3 is not defined(…)(anonymous function) @ VM172:1
console.log(n4); var n4 = 200;     //undefined

