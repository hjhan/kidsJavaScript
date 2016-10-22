/**
 * 判断是否为闰年
 * @param year
 * @returns {boolean}
 */
function isLeapYear(year) {
    if (year % 400 == 0) return true;
    if ((year % 4 == 0) && (year % 100 != 0)) {
        return true;
    }
    else {
        return false;
    }
}


var f = [];
/**
 * 阶乘
 * @param n
 * @returns {*}
 */
function factorial(n) {
    if (n == 0 || n == 1) return 1;
    if (f[n] > 0) return f[n];
    return f[n] = factorial(n - 1) * n;
}

/**
 * 10进制转换 为二进制，八进制，16进制
 */
let n = 123
console.log(n + " 二进制表示法为" + n.toString(2));
console.log(n + " 八进制表示法为" + n.toString(8));
console.log(n + " 十六进制表示法为" + n.toString(16));

/**
 * 二进制，八进制，16进制 => 10进制
 */
let x = '110111'
console.log(x + " 二进制=>10进制表示法为" + parseInt(x, 2));
console.log(x + " 八进制=>10进制表示法为" + parseInt(x, 8));
console.log(x + " 十六进制=>10进制表示法为" + parseInt(x, 16));

/**
 * 科学计数法
 */
3438434.348394.toExponential();   //"3.438434348394e+6"
0.0000000000000495849.toExponential();   //"4.95849e-14"
