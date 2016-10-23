/**
 打印星期的中文
 */
function weekDay(day) {
    switch (day) {
        case 1:
            console.log("星期一");
            break;
        case 2:
            console.log("星期二");
            break;
        case 3:
            console.log("星期三");
            break;
        case 4:
            console.log("星期四");
            break;
        case 5:
            console.log("星期五");
            break;
        case 6:
        case 0:
            console.log("噢耶，周末了!!");
            break;
    }
}
weekDay(1);
weekDay(5);
weekDay(6)
weekDay(0);
