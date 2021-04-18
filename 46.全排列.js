/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums, n = 0) {
    if (n >= nums.length) return [[]];
    const res = [];
    const prevs = permute(nums, n + 1);  // permutations of elements after n
    for (let prev of prevs) {
        for (let i = 0; i <= prev.length; i++) {
            let p = prev.slice(0);
            p.splice(i, 0, nums[n]);  // successively insert element n
            res.push(p);
        }
    }
    return res;
};
// @lc code=end


// Dynamic Programming
var permute = function (nums, n = 0) {
    if (n >= nums.length) return [[]];
    const res = [];
    const prevs = permute(nums, n + 1);  // permutations of elements after n
    for (let prev of prevs) {
        for (let i = 0; i <= prev.length; i++) {
            let p = prev.slice(0);
            p.splice(i, 0, nums[n]);  // successively insert element n
            res.push(p);
        }
    }
    return res;
};

// Recursive
var permute = function (letters) {
    let res = [];
    dfs(letters, [], Array(letters.length).fill(false), res);
    return res;
}

function dfs(letters, path, used, res) {
    if (path.length == letters.length) {
        // make a deep copy since otherwise we'd be append the same list over and over
        res.push(Array.from(path));
        return;
    }
    for (let i = 0; i < letters.length; i++) {
        // skip used letters
        if (used[i]) continue;
        // add letter to permutation, mark letter as used
        path.push(letters[i]);
        used[i] = true;
        dfs(letters, path, used, res);
        // remove letter from permutation, mark letter as unused
        path.pop();
        used[i] = false;
    }
}