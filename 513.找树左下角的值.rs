/*
 * @lc app=leetcode.cn id=513 lang=rust
 *
 * [513] 找树左下角的值
 */
struct Solution {}
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
            right: None,
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
use std::cell::RefCell;
use std::collections::VecDeque;
use std::rc::Rc;
impl Solution {
    pub fn find_bottom_left_value(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut deque = VecDeque::new();
        let mut ans = 0;
        deque.push_back(root);

        while !deque.is_empty() {
            if let Some(Some(node)) = deque.pop_front() {
                if node.borrow().right.is_some() {
                    deque.push_back(node.borrow().right.clone());
                }
                if node.borrow().left.is_some() {
                    deque.push_back(node.borrow().left.clone());
                }
                ans = node.borrow().val
            }
        }
        ans
    }
}
// @lc code=end
