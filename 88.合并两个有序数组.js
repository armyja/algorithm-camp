/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // 注意
    let insertPos = m + n - 1;
    let a = m - 1;
    let b = n - 1;
    // nums2 的长度小于 nums1 的长度。
    while (b >= 0) {
        nums1[insertPos--] = nums1[a] > nums2[b] ? nums1[a--] : nums2[b--];
    }
};

var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    
    for (let i = m + n - 1; i >=0; i--) {
        if (p1 === 0) {
            nums1[i] = nums2[p2--];
            continue; 
        }
        if (p2 === 0) {
            nums1[i] = nums1[p1--];
            continue; 
        }
        if (p1 || p2) {
            if (nums1[p1] > nums2[p2]) {
                nums1[i] = nums1[p1--];
            } else {
                nums1[i] = nums2[p2--];
            }
            continue;
        }

    }

};

merge([1,2,3,0,0,0],
    3,
    [2,5,6],
    3)
// @lc code=end

