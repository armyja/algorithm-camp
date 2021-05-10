/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
 * @return {number[]}
 */
var largestValues = function (root) {
    const res = []
    if (root === null) {
        return res;
    }
    const dfs = function(root, level) {
        if (root === null) {
            return;
        }
        if (res[level] === undefined || res[level] < root.val) {
            res[level] = root.val;
        }
        if (root.left) {
            dfs(root.left, level + 1);
        }
        if (root.right) {
            dfs(root.right, level + 1);
        }
    };
    dfs(root, 0);
    return res;
};
// @lc code=end

// BFS
var largestValues = function (root) {
    const res = [];
    if (root === null) {
        return res;
    }
    const queue = [root];
    while (queue.length > 0) {
        let max = queue[0].val;
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            max = Math.max(node.val, max);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        res.push(max);
    }
    return res;
};
