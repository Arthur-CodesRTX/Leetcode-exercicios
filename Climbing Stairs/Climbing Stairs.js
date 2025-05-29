function climbStairs(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let a = 1;
    let b = 2;
    let total = 0;

    for (let i = 3; i <= n; i++) {
        total = a + b;
        a = b;
        b = total;
    }

    return b;
}

console.log(climbStairs(2))