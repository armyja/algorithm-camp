// https://leetcode-cn.com/problems/get-kth-magic-number-lcci/
/**
 * @param {number} k
 * @return {number}
 */
 var getKthMagicNumber = function(k) {
    let p3 = 0;
    let p5 = 0;
    let p7 = 0;
    let arr = [1];
    for (let i = 2; i <= k; i++) {
        const val3 = arr[p3] * 3;
        const val5 = arr[p5] * 5;
        const val7 = arr[p7] * 7;
        const val = Math.min(val3, val5, val7);
        arr.push(val);
        if (val === val3) {
            p3++;
        }
        if (val === val5) {
            p5++;
        }
        if (val === val7) {
            p7++;
        }
    }
    return arr[k - 1];
};