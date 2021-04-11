/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (root === null) {
        return [];
    }
    const ret = [];
    let stack = [root];
    while (stack.length) {
        root = stack.pop();
        if (root.children.length > 0) {
            stack = stack.concat(root.children);
        }
        ret.unshift(root.val);
    }
    return ret;
};

var postorder_recuresive = function(root) {
    let ret = [];
    const _postorder = function(root, ret) {
        if (root === null) {
            return;
        }
        if (root.children === null) {
            ret.push(root.val);
            return;
        }
        for (let i of root.children) {
            _postorder(i, ret);
        }
        ret.push(root.val);
    }
    _postorder(root, ret);
    return ret;
};
// @lc code=end

