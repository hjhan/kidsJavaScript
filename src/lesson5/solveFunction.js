//超越方程求解
function f1(x) {
    return 2 * x * x * Math.pow(Math.sin(x), 7) +
        3 * Math.sqrt(x) * Math.cos(x) - Math.exp(x) / 5;
}

//多解情况
function f2(x) {
    return Math.sin(2 * Math.PI * x);
}

//在两个x之间折半寻找精确解
function getAnswer(x0, x1, y0, y1, func, precision) {
    var mid, val;
    while (true) {
        mid = (x0 + x1) / 2;
        val = func(mid);
        if (Math.abs(val) < precision) break;
        if (y0 * val < 0) {
            x1 = mid;
            y1 = val;
        }
        else {
            x0 = mid;
            y0 = val;
        }
    }
    return {x: mid, y: val};
}

//在指定范围内求解---计算[start, end]间的所有解
function solve(start, end, func) {
    var rst = [];
    var lastx = start + 1e-5;
    var y0, y1, y2;
    y0 = func(lastx);
    y1 = y0;

    for (var x = start; x <= end + 0.001; x += 0.001) {
        y2 = func(x);
        if (y2 * y1 < 0) {
            rst.push(getAnswer(lastx, x, y1, y2, func, 1e-8));
        }
        y1 = y2;
        lastx = x;
    }

    return rst;
}

function f2(x) {
    return 2 * x - 5 - 10;
}
var rst = solve(-15, 15, f2);
console.log(rst);

//测试两个方程的解
var rst = solve(2, 3, f1);
console.log(rst);

var rst = solve(0, 5, f2);
console.log(rst.length);
console.log(rst);
