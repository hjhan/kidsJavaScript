/**
 给定月份和年，求出当月有多少天
 */

function isLeap(year) {
    if (((year % 4 == 0) && !(year % 100 == 0))
        || (year % 400 == 0)) return true;
    else return false;
}

function daysOfMonth(month, year) {
    var numDays;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            numDays = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            numDays = 30;
            break;
        case 2:
            numDays = isLeap(year) ? 29 : 28;
            break;
        default:
            console.log("非法月份");
            break;
    }
    console.log(year + "年" + month + "月" + "有 " + numDays + "天")
    return numDays;
}
daysOfMonth(10, 2016);
daysOfMonth(2, 2016);
daysOfMonth(2, 2015);
daysOfMonth(3, 2014);
daysOfMonth(2, 2100);