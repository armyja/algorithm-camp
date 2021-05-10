/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const res = [];
    const go = function (n, k, path) {
        if (n < k || k === 0) {
            if (k === 0) {
                res.push(path.slice());
            }
            return;
        }

        go(n - 1, k - 1, path.concat(n));
        go(n - 1, k, path);
    };
    go(n, k, []);
    return res;
};
// @lc code=end

// 回溯剪枝
var combine = function (n, k) {
    const res = [];
    const build = function (arr, maxVal) {
        if (arr.length + n - maxVal < k) {
            return;
        }
        if (arr.length === k) {
            res.push(arr.slice());
            return;
        }
        for (let i = maxVal + 1; i <= n; i++) {
            arr.push(i);
            build(arr, i);
            arr.pop();
        }
    }
    build([], 0);
    return res;
};

// 递归
var combine = function (n, k) {
    const res = [];
    const build = function (n, k, path) {
        if (n < k) {
            return;
        }

        if (k === 0) {
            res.push(path);
            return;
        }

        build(n - 1, k - 1, path.concat(n));
        build(n - 1, k, path);
    }
    return res;
};