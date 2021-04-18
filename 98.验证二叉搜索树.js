/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
    const isValid = function (root, lower, upper) {
        if (root === null) {
            return true;
        }

        if (root.val <= lower || root.val >= upper) {
            return false;
        }

        return isValid(root.left, lower, root.val) && isValid(root.right, root.val, upper);
    };
    return isValid(root, -Infinity, Infinity);
};

// @lc code=end

var isValidBST = function(root, min=null, max=null) {
    if (!root) return true;
    if (min && root.val <= min.val) return false;
    if (max && root.val >= max.val) return false;
    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};


var isValidBST = function(root) {
    let stack = [];
    let inorder = -Infinity;

    while (stack.length || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
        if (root.val <= inorder) {
            return false;
        }
        inorder = root.val;
        root = root.right;
    }
    return true;
};