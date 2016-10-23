/**
 红绿灯：红:0,黄:1,黄:2;
 */
var color = 0;
function change() {
    switch (color) {
        case 0:
            color = 1;
            console.log("红灯变绿灯");
            break;
        case 1:
            color = 2;
            console.log("绿灯变黄灯");
            break;
        case 2:
            color = 0;
            console.log("黄灯变红灯");
            break;
        default:
    }
    setTimeout(change, 10000);
}
change();
