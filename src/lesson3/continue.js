/**
 列出 200-500之间能被7整除的整数
 */
let i = 200;
let n = 500;
while (i <= n) {
    if (i % 7 != 0) {
        continue;
    }
    console.log(i);
}