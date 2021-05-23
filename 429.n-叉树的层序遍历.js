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
    const res = [];
    let arr = [root];
    while (arr.length) {
        let tmpArr = [];
        let tmpRes = [];
        for (let node of arr) {
            tmpRes.push(node.val);
            if (node.children) {
                tmpArr = tmpArr.concat(node.children);
            }
        }
        arr = tmpArr;
        res.push(tmpRes);
    }
    return res;
};
// @lc code=end

