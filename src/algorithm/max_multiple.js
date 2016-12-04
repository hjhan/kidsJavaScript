/*
 猜数题：
 []x[][]x[][][]
 在[]里填上1到6中的一个数字，使得积最大，请问最大值是多少
 */
var num = [1, 2, 3, 4, 5, 6];
var max = 0;
for (var i = 0; i < 6; i++) {
    var a = num[i];
    for (var j = 0; j < 6; j++) {
        if (j == i)
            continue;
        for (var j2 = 0; j2 < 6; j2++) {
            if (j2 === j || j2 === i)
                continue;
            var b = num[j] * 10 + num[j2];
            for (var k = 0; k < 6; k++) {
                if (k === i || k === j || k === j2)
                    continue;
                for (var k2 = 0; k2 < 6; k2++) {
                    if (k2 === i || k2 === j || k2 === j2 || k2 === k)
                        continue;
                    for (var k3 = 0; k3 < 6; k3++) {
                        if (k3 === i || k3 === j || k3 === j2 || k3 === k || k3 == k2)
                            continue;
                        var c = num[k] * 100 + num[k2] * 10 + num[k3];
                        var res = a * b * c;
                        if (res > max) {
                            max = res;
                        }
                        console.log("a*b*c=" + a + "*" + b + "*" + c + "=" + res);
                    }
                }
            }
        }
    }
}
console.log("MAX=" + max);
