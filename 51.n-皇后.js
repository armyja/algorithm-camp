/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// 回溯法
// 函数的参数有哪些？结果集、n、当前进度、当前行。
// 当前进度用什么数据结构表示最简单的？Q 的坐标。
// some 方法，第一个参数是 value，第二个是 index。

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const res = [];
    backtrack(res, n);
    return res;
};

function backtrack(res, n, board = [], r = 0) {
    if (r === n) {
        res.push(board.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
        return;
    }
    for (let c = 0; c < n; c++) {
        if (!board.some((bc, br) => bc === c || bc + br === c + r || bc - br === c - r)) {
            board.push(c);
            backtrack(res, n, board, r + 1);
            board.pop(c);
        }
    }
}
// @lc code=end

