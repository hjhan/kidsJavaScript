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
