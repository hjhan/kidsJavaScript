function fact(n) {
    return (n === 1) ? 1 : n * fact(n - 1);
}
var r = fact(10);
console.log(r)
