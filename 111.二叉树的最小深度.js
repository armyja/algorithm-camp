/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (root === null) return 0;
    if (root.left === null) return minDepth(root.right) + 1;
    if (root.right === null) return minDepth(root.left) + 1;
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
// @lc code=end

// BFS
var minDepth = function (root) {
    if (root === null) {
        return 0;
    }
    let res = 0;
    let arr = [root];
    while (arr) {
        let arrTemp = [];
        res++;
        for (let item of arr) {
            if (item.left === null && item.right === null) {
                return res;
            }
            if (item.left !== null) {
                arrTemp.push(item.left);
            }
            if (item.right !== null) {
                arrTemp.push(item.right);
            }
        }
        arr = arrTemp;
    }
    return res;
};

// Recursion

var minDepth = function (root) {
    if (root === null) return 0;
    if (root.left === null) return minDepth(root.right) + 1;
    if (root.right === null) return minDepth(root.left) + 1;
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};