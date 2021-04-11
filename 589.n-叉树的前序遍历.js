/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (root === null) {
        return [];
    }
    let stack = [root];
    let ret = [];
    while (stack.length) {
        root = stack.shift();
        ret.push(root.val);
        if (root.children.length > 0) {
            stack = root.children.concat(stack);
        }
    }
    return ret;
};
// @lc code=end

