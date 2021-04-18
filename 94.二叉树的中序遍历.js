/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
    const ret = [];
    const inorder = (root) => {
        if (root === null) {
            return;
        }
        inorder(root.left);
        ret.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return ret;
};
// @lc code=end

// Stack
var inorderTraversal = function (root) {
    const res = [];
    const stack = [];
    let curr = root;
    while (curr || stack.length) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        res.push(curr.val);
        curr = curr.right;
    }
    return res;
};

