var nthUglyNumber = function(n) {
    let arr = [1];
    let p2 = 0;
    let p3 = 0;
    let p5 = 0;
    for (let i = 2; i <= n; i++) {
        const v2 = arr[p2] * 2;
        const v3 = arr[p3] * 3;
        const v5 = arr[p5] * 5;
        const max = Math.min(v2, v3, v5);
        if (v2 === max) {
            p2++;
        }
        if (v3 === max) {
            p3++;
        }
        if (v5 === max) {
            p5++;
        }
        arr.push(max);
    }
    return arr[n - 1];
};