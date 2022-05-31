/*
 * @lc app=leetcode.cn id=701 lang=rust
 *
 * [701] 二叉搜索树中的插入操作
 */
#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
  pub val: i32,
  pub left: Option<Rc<RefCell<TreeNode>>>,
  pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
  #[inline]
  pub fn new(val: i32) -> Self {
    TreeNode {
      val,
      left: None,
      right: None
    }
  }
}
// @lc code=start
// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
//
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn insert_into_bst(root: Option<Rc<RefCell<TreeNode>>>, val: i32) -> Option<Rc<RefCell<TreeNode>>> {
        if let Some(node) = &root {
            let mut node = node.borrow_mut();
            if node.val > val {
                node.left = Solution::insert_into_bst(node.left.clone(), val)
            } else {
                node.right = Solution::insert_into_bst(node.right.clone(), val)
            }
            drop(node);
            root
        } else {
            Some(Rc::new(RefCell::new(TreeNode::new(val))))
        }
    }
}
// @lc code=end

