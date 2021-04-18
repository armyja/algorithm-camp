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
    const res = [];
    if (root === null) {
        return res;
    } 
    let arr = [root];
    while (arr.length > 0) {
        let arrTemp = [];
        let resItem = [];
        for (let item of arr) {
            resItem.push(item.val);
            if (item.left) {
                arrTemp.push(item.left);
            }
            if (item.right) {
                arrTemp.push(item.right);
            }
        }
        res.push(resItem);
        arr = arrTemp;
    }
    return res;
};
// @lc code=end

