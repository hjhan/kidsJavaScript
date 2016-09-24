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
 * while 打印当前数字
 */

var i = 0;
while (i < 100) {
    console.log('i当前为：' + i);
    i += 1;
}

/**
 * for loop 判断偶数 或 质数/素数
 */
var number = 79;
var sqrtN = Math.sqrt(number);
for (var i = 2; i <= sqrtN; i++) {
    if (number % i === 0) {
        console.log(number + "不是质数");
        break;
    }
}
if (i > sqrtN) {
    console.log(number + "为质数");
}

/**
 * for loop 判断偶数
 */
var n = 100;
for (var i = 1; i <= n; i++) {
    if (i % 2 == 0) console.log(i + "为偶数")
}

var n = 100;
var sum = 0;
for (var i = 1; i <= n; i++) {
    sum += i;
}
console.log("1 到 n 的 和 为 " + sum);


typeof 2323;   //'number'
typeof "String in quotes";   //'string'
/**
 * window(browser) or global (node)  NaN, Infinity
 */

typeof NaN;    //'number'

NaN !== NaN;      //true

Number.isNaN("dfjk");   //false  only NaN true

Number("xyz");  //NaN;

3 / 0;  //Infinity

Infinity - Infinity;   //NaN
Infinity + Infinity;   //Infinity
Infinity / Infinity;   //NaN
Infinity * Infinity;     //Infinity

/**
 * differences of let and var, scope and hoisting for var
 */
{
    let n1 = 5;
    console.log(n1);
}
console.log(n1);

{
    var n1 = 5;
    console.log(n1);
}
console.log(n1);


console.log(n3);
let n3 = 100;    // Uncaught ReferenceError: n3 is not defined(…)(anonymous function) @ VM172:1
console.log(n4);
var n4 = 200;     //undefined

