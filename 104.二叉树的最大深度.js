/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
    return maxDepth_recursive(root);
};
// @lc code=end

// Recursion
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};


// Loop
var maxDepth = function(root) {
    let level = 0;
    if (root === null) {
        return level;
    }
    let arr = [root];
    while (arr.length) {
        level++;
        let arr_temp = [];
        for (let node of arr) {
            if (node.left) {
                arr_temp.push(node.left);
            }
            if (node.right) {
                arr_temp.push(node.right);
            }
        }
        arr = arr_temp;
    }
    return level;
};