/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function(n) {
    let ret = 0;
    // 每次操作都消除一个 1
    while (n !== 0) {
        n &= n - 1;
        ret++; 
    }
    return ret;
};
// @lc code=end

var hammingWeight = function(n) {
    let ret = 0;
    for (let i = 0; i < 32; i++) {
        if ((n & (1 << i)) !== 0) {
            ret++;
        }
    }
    return ret;
};