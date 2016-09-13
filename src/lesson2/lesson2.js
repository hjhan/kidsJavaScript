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

