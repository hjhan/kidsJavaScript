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

/**
 * 判断是否闰年
 */
