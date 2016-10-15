/**
 定义一个年龄，如果大于 18 ，输出成人，如果小于18， 输出未成人
 */
let age = 10;
if (age >= 18) {
    console.log("成年人");
} else {
    console.log("青少年，幼儿");
}


/**
 定义时间，如果12点之前，
 输出good morning,12点和18点之间，
 输出good afternon, 18点之后，
 输出good evening
 */
let hour = 13;
if (hour < 12) {
    console.log("good morning");
}
else if( hour < 18) {
    console.log("good afternoon");
} else {
    console.log("good envening");
}
/**
 * while 打印当前数字
 */

var i = 0;
while (i < 100) {
    console.log('i当前为：' + i);
    i += 1;
}

//计算2+4+6+8+...+1000?
var n = 10000000;
var sum = 0;
var  begin = new Date().getMilliseconds();
for( var i =2; i<=n; i = i+2){
    sum += i;
}
var end = new Date().getMilliseconds();
console.log("2到1000的偶数和为：" + sum + ", 花费时间为：" + (end-begin) + "毫秒");
//或者
var n = 10000000;
var sum = 0;
var  begin = new Date().getMilliseconds();
for( var i =2; i<=n; i++){
    if( i % 2 == 0){
        sum += i;
    }
}
var end = new Date().getMilliseconds();
console.log("2到1000的偶数和为：" + sum + ", 花费时间为：" + (end-begin) + "毫秒");
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

