/**
 * 【问题描述】

 给你n根火柴棒，你可以拼出多少个形如“A+B=C”的等式?等式中的A、B、C是用火柴棒拼出的整数(若该数非零，则最高位不能是0)。用火柴棒拼数字0--9的拼法如图所示：
 注意
 加号与等号各自需要2根火柴棒
 如果A≠B，则A+B=C与B+A=C视为不同的等式(A、B、C>=0)
 n根火柴棒必须全部用上
 【输入】

 输入文件matches.in共一行，有一个整数n(n<=24)。

 【输出】

 输出文件matches.out共一行，有一个整数，表示能拼成的不同等式的数目。

 【输入输出样例1】

 matches.in

 14
 matches.out

 2
 【输入输出样例1解释】

 2个等式为0+1=1和l+0=1

 【输入输出样例2】

 matches.in

 18
 matches.out

 9
 【输入输出样例2解释】

 9个等式为:

 0+4=4
 0+11=11
 1+10=11
 2+2=4
 2+7=9
 4+0=4
 7+2=9
 10+1=11
 11+0=11
 直接模拟。。枚举A,B。
 */

var need = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];
var ans = 0;
const eps = 0.1;
function cnt(cur) {
    var c = 0, ret = 0;
    if (cur === 0) return 6;
    while (cur > eps) {
        ret = parseInt(cur % 10);
        c += need[ret];
        cur = parseInt(cur / 10);
    }
    return c;
}
function count(n) {
    for (var i = 0; i <= 100; i++) {
        for (var j = 0; j <= 100; j++) {
            var a = cnt(i);
            var b = cnt(j);
            var d = cnt(i + j);
            var c = n - 4 - a - b;
            if (d === c) {
                console.log(i + " + " + j + " = " + (i + j));
                ans++;
            }
        }
    }
    console.log(ans);
}
count(14) //2
count(18) //2