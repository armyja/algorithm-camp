/*
 * @lc app=leetcode.cn id=129 lang=rust
 *
 * [129] 求根节点到叶节点数字之和
 */

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
use std::collections::VecDeque;
impl Solution {
    pub fn sum_numbers(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut deque = VecDeque::new();
        let mut res = 0;
        deque.push_back((root, 0));

        while !deque.is_empty() {
            if let Some(tuple) = deque.pop_front() {
                let node = tuple.0.unwrap();
                let sum = tuple.1;
                let val = node.borrow().val + sum * 10;
                if node.borrow().left.is_some() {
                    deque.push_back((node.borrow().left.clone(), val));
                }
                if node.borrow().right.is_some() {
                    deque.push_back((node.borrow().right.clone(), val));
                }
                if node.borrow().left.is_some() == false && node.borrow().right.is_some() == false {
                    res += val;
                }
            }
        }
        res
    }
}
// @lc code=end

