/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const levels = [];
    if (root === null) {
        return levels;
    } 
    let queue = [root];
    while (queue.length > 0) {
        let queueLength = queue.length;
        let currLevel = [];
        for (let i = 0; i < queueLength; i++) {
            const curr = queue.shift();
            currLevel.push(curr.val);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
        levels.push(currLevel);
    }
    return levels;
};
// @lc code=end

