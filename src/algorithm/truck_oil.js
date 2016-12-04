/*
 甲地有59吨货物要运到乙地，大货车的载重是7吨，小货车的载重是4吨。
 大货车一趟耗油14升，小货车一趟耗油9升，问：运完这批货物最少耗油多少升？
 假设 大货车 x 趟， 小货车 y 趟， 则有下列关系式
 7*x + 4*y >= 59
 min(14*x + 9*y)
 x >=0 && y >=0
 */
function optimalOil(total, big, small) {
    var optimal = {};
    var xMax = Math.ceil(total / big.load);
    for (var x = 0; x <= xMax; x++) {
        var y = Math.ceil((total - big.load * x) / small.load);
        if (y < 0) continue;
        var oil = big.oilCon * x + small.oilCon * y;
        console.log("x:%d,y:%d,oil:%d,optimal.min:%d", x, y, oil, optimal.min);
        if (optimal.min === undefined || optimal.min > oil) {
            optimal = {x: x, y: y, min: oil};
        }
    }
    console.log("最少耗油：%d，大货车:%d趟，小货车:%d趟", optimal.min, optimal.x, optimal.y);
    return optimal;
}
var total = 59;
var big = {load: 7, oilCon: 14};
var small = {load: 4, oilCon: 9};
optimalOil(total, big, small);