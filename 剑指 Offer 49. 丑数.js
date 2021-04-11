var nthUglyNumber = function(n) {
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    let p2 = 1;
    let p3 = 1;
    let p5 = 1;
    for (let i = 2; i <= n; i++) {
        const two = 2 * dp[p2];
        const three = 3 * dp[p3];
        const five = 5 * dp[p5];
        dp[i] = Math.min(Math.min(two, three), five);
        if (dp[i] === two) {
            p2++;
        }
        if (dp[i] === three) {
            p3++;
        }
        if (dp[i] === five) {
            p5++;
        }
    }
    return dp[n];
};

nthUglyNumber(10);