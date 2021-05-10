/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
 var minMutation = function (start, end, bank) {
 }

// 这道题一开始写算法的时候，忽略了一个基因可以变化很多次后变回初始状态。
// @lc code=end

// BFS
var minMutation = function (start, end, bank) {
    let bankSet = new Set(bank);
    if (!bankSet.has(end)) {
        return -1;
    }
    if (start === end) {
        return 0
    }
    const dnaList = ['A', 'G', 'C', 'T'];
    const queue = [[start, 0]];
    while (queue.length > 0) {
        let [node, count] = queue.shift();
        if (node === end) {
            return count;
        }
        for (let i = 0; i < node.length; i++) {
            for (let j of dnaList) {
                let val = node.slice(0, i) + j + node.slice(i + 1);
                if (bankSet.has(val)) {
                    queue.push([val, count + 1]);
                    bankSet.delete(val);
                }
            }
        }
    }
    return -1;
};