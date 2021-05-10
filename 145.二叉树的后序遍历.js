/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 var postorderTraversal = function(root) {
    const stack = [];
      const res = [];
      let curr = root;
      let prev = null;
      while(stack.length > 0 || curr) {
          while (curr !== null) {
              stack.push(curr);
              curr = curr.left;
          }
  
          curr = stack.pop();
          if (curr.right === null || prev === curr.right) {
              // right tree is null or has been visited
              res.push(curr.val);
              prev = curr;
              curr = null;
          } else {
              // right tree not visited
              stack.push(curr);
              curr = curr.right;
          }
      }
      return res;
  };
// @lc code=end

