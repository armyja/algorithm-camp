/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) {
        return 0;
    }
    return Math.floor(sqrt(x)(x));
};

function sqrt(x) {
    let origin = x;
    return function inner(x) {
        let x1 = x - (x * x - origin) / (2 * x);
        if (x - x1 < 0.1) {
            return x1;
        }
        return inner(x1);
    }
}
// @lc code=end

// 牛顿迭代法
// https://blog.csdn.net/ccnt_2012/article/details/81837154
var mySqrt = function(x) {
    if (x === 0) {
        return 0;
    }
    return Math.floor(sqrt(x)(x));
};

function sqrt(x) {
    let origin = x;
    return function inner(x) {
        let x1 = x - (x * x - origin) / (2 * x);
        if (x - x1 < 0.1) {
            return x1;
        }
        return inner(x1);
    }
}