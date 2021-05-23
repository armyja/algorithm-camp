/*
 * @lc app=leetcode.cn id=993 lang=javascript
 *
 * [993] 二叉树的堂兄弟节点
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
 var isCousins = function(root, x, y) {
    let stack = [root];
    let xVisted = 0;
    let yVisted = 0;
    while (stack.length > 0) {
        let arr = []
        for (let node of stack) {
            let left = node.left;
            if (left !== null) {
                arr.push(left);
                [xVisted, yVisted] = check(left, xVisted, yVisted);
            }
            let right = node.right;
            if (right !== null) {
                arr.push(right);
                [xVisted, yVisted] = check(right, xVisted, yVisted);
            }
            if (left && right && left.val === x.val && right.val === y.val) {
                return false;
            }
        }
        if (xVisted && yVisted) {
            return true;
        }
        stack = arr;
    }
    return false;
};

function check(node, x, y) {
    if (node.val === x.val) {
        return [true, y];
    }
    if (node.val === y.val) {
        return [x, true];
    }
    return [x, y];
}
// @lc code=end

