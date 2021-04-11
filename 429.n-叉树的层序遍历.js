/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) {
        return [];
    }
    const ret = [];
    let stack = [root];
    while (stack.length) {
        ret.push(stack.map(i => i.val));
        let arr = [];
        for (let i of stack) {
            if (i.children.length) {
                arr = arr.concat(i.children);
            }
        }
        stack = arr;
    }
    return ret;  
};
// @lc code=end

