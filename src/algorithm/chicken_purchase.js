/**
 百钱买百鸡的问题算是一套非常经典的不定方程的问题，题目很简单：公鸡5文钱一只，母鸡3文钱一只，小鸡3只一文钱，
 用100文钱买一百只鸡,其中公鸡，母鸡，小鸡都必须要有，问公鸡，母鸡，小鸡要买多少只刚好凑足100文钱。
 分析：我们可以设公鸡为x，母鸡为y，小鸡为z，那么我们
 可以得出如下的不定方程，
 x+y+z=100,
 5x+3y+z/3=100，
 下面再看看x，y，z的取值范围。
 由于只有100文钱，则5x<100 => 0<x<20, 同理  0<y<33,那么z=100-x-y，
 z=75+3k
 要保证0<x，y，z<100的话，k的取值范围只能是1,2,3，下面我们继续上代码。
 */
//公鸡的上限
for (var x = 1; x < 20; x++) {
    //母鸡的上限
    for (var y = 1; y < 33; y++) {
        //剩余小鸡
        var z = 100 - x - y;
        if ((z % 3 == 0) && (x * 5 + y * 3 + z / 3 == 100)) {
            console.log("公鸡:%d只，母鸡:%d只,小鸡:%d只", x, y, z);
        }
    }
}

/**
 var x, y, z;
 for (var k = 1; k <= 3; k++)
 {
     x = 4 * k;
     y = 25 - 7 * k;
     z = 75 + 3 * k;
    console.log("公鸡:%d只，母鸡:%d只,小鸡:%d只", x, y, z);
 }
 */