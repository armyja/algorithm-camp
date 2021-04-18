/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const res = [];
    function permute(options, arr = []) {
        if (options.length === 0) {
            res.push(arr);
            return;
        }
        const visited = new Set();
        for (let i = 0; i < options.length; i++) {
            if (visited.has(options[i])) {
                continue;
            }
            permute([...options.slice(0, i), ...options.slice(i + 1)], arr.concat(options[i]));
            visited.add(options[i]);
        }
    }
    permute(nums)
    return res;
};
// @lc code=end



var permuteUnique = function (nums, n = 0, used = {}) {
    if (n >= nums.length) return [[]];
    const res = [];
    const prevs = permuteUnique(nums, n + 1, used);  // permutations of elements after n
    for (let prev of prevs) {
        for (let i = 0; i <= prev.length; i++) {
            let p = prev.slice(0);
            p.splice(i, 0, nums[n]);  // successively insert element n
            if (used[p] !== 1) {
                res.push(p);
                used[p] = 1;
            }
        }
    }
    return res;
};



var permuteUnique = function (nums) {
    const result = [];
    function permute(options, arr = []) {
        if (options.length === 0) {
            result.push(arr);
        }
        const visited = new Set();

        for (let i = 0; i < options.length; i++) {
            if (visited.has(options[i])) {
                continue;
            }
            permute([...options.slice(0, i), ...options.slice(i + 1)], [...arr, options[i]]);
            visited.add(options[i]);
        }
    }
    permute(nums);
    return result;
};