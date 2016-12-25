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

/**
 * 判断俄罗斯方块哪个位置是1，需要绘制
 * @type {number}
 */
var i = 16;
var block = 0x44C0;
for (bit = 0x8000; bit > 0; bit = bit >> 1) {
    console.log("十进制:" + bit + ",二进制:" + bit.toString(2));
    if (block & bit) {
        console.log(i + "bit is 1");
    }
    i--;
    console.log(i);
}
//-------------------------------------------------------------------------
// tetris pieces
//
// blocks: each element represents a rotation of the piece (0, 90, 180, 270)
//         each element is a 16 bit integer where the 16 bits represent
//         a 4x4 set of blocks, e.g. j.blocks[0] = 0x44C0
//
//             0100 = 0x4 << 3 = 0x4000
//             0100 = 0x4 << 2 = 0x0400
//             1100 = 0xC << 1 = 0x00C0
//             0000 = 0x0 << 0 = 0x0000
//                               ------
//                               0x44C0
//
//-------------------------------------------------------------------------