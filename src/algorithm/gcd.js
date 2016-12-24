/*
 其实，求最大公约数的一个更有效的算法是在公元前300年左右由欧几里得发现的，这是最古老的著名算法之一。
 它可以递归地定义为：
 用gcd(m,n)表示整数m,n的最大公约数：
 - 如果m%n为0，那么gcd(m,n)为n。
 - 否则，gcd(m,n)就是gcd(n,m%n)
 假设m%n=r，那么，m=qn+r，这里的q是m/n的商。能整除m和n的任意数字都必定也能整除r。
 因此gcd(m,n)和gcd(n,r)是一样的。其中r=m%n。
 */

function gcd(m, n) {
    if (m < n) {
        var temp = n;
        n = m;
        m = temp;
    }
    return (m % n == 0) ? n : gcd(n, m % n);
}
//var r= gcd(12,6);
var r = gcd(48, 36);
console.log(r);
var r = gcd(60, 42);
console.log(r);