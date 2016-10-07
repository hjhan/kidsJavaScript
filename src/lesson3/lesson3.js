/**
 * 打印9*9 乘法表
 * 1*1=1
 * 1*2=2 2*2=4
 * 1*3=3 2*3=6 3*3=9
 * 1*4=4 2*4=8 3*4=12 4*4=16
 * 1*5=5 2*5=10 3*5=15 4*5=20 5*5=25
 * 1*6=6 2*6=12 3*6=18 4*6=24 5*6=30 6*6=36
 * 1*7=7 2*7=14 3*7=21 4*7=28 5*7=35 6*7=42 7*7=49
 * 1*8=8 2*8=16 3*8=24 4*8=32 5*8=40 6*8=48 7*8=56 8*8=64
 * 1*9=9 2*9=18 3*9=27 4*9=36 5*9=45 6*9=54 7*9=63 8*9=72 9*9=81
 */
//var n = prompt("输入数字");
let n = 9;
for (var i = 1; i <= n; i++) {
    var str = '';
    for (var j = 1; j <= i; j++) {
        str += j + '*' + i + '=' + i * j + ' ';
    }
    console.log(str);
}
/**
 * 已知百度股票今日每三十分钟价格，求出当日K线上的最高价和最低价
 */
let prices = [191.72, 193.24, 197.28, 196.76, 190.30, 194.24, 192.64, 195.28, 199.46, 190.31, 191.72, 198.23, 190.28, 196.76, 190.87, 201.52, 189.24, 187.28, 186.76, 180.30];
if (prices.length > 0) {
    let high = prices[0];
    let low = prices[0];
    for (p of prices) {
        if (p > high) {
            high = p;
        }
        if (p < low) {
            low = p;
        }
    }
    console.log("最高价为：" + high + "最低价为：" + low);
}


/**
 * 求加权平均价
 */


/**
 * 小贾收到压岁钱580块，存入银行年利率7%,请问几年后小贾压岁钱可以翻翻？
 */
let m = 580;
let m2 = 580 * 2;
let rate = 0.07;  //年存款利率 7%；
let n = 1;
while (m < m2) {
    m = m * (1 + rate);
    n++;
}
console.log(n + "年后小贾压岁钱可以翻翻");

/**
 * 小明2010年初 159.73万买入一套房子， 2016年底 289.74 万卖出，请问小明年均收益率？
 */
let buy = 159.73;     //买入价格
let sell = 289.74;    //卖出价格
let n = 2016 - 2010 + 1;  //共计七年时间
let rate = (sell - buy) / n;
console.log("小明年均收益率：" + rate);

/**
 *  语文考试 成绩如下， 求 最高分，最低分 和 平均分，以及 班级及格率 和 不及格率
 */
let scores = [78, 86, 45, 96, 67, 79.9, 56.6, 89, 79, 68.5, 56];
let high = scores[0];
let low = scores[0];
let avg = 0;
let passRate;
let passCount = 0;
for (score of scores) {
    if (score > high) {
        high = score;
    }
    if (score < low) {
        low = score;
    }
    avg += score;
    if (score >= 60) {
        passCount++;
    }
}
let n = scores.length;
passRate = passCount / n;
avg = avg / n;
console.log("最高分：" + high + ",最低分：" + low + ",平均分:" + avg + ",及格率：" + passRate + ",不及格率：" + (1 - passRate));

