/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }

    const map = {};
    for (let i of nums1) {
        map[i] ? map[i]++ : map[i] = 1;
    }

    const ret = [];
    for (let i of nums2) {
        if (map[i]) {
            ret.push(i);
            map[i]--;
        }
    }
    return ret;
};

// @lc code=end

