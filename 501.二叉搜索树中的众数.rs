/*
 * @lc app=leetcode.cn id=501 lang=rust
 *
 * [501] 二叉搜索树中的众数
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
impl Solution {
    pub fn find_mode(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        let mut ret: Vec<i32> = vec![];
        let (mut cur, mut count, mut max) = (0, 0, 0);
        Solution::dfs(&root, &mut max, &mut cur, &mut count, &mut ret);
        if count > max { ret.clear(); } 
        if count >= max && count != 0 { ret.push(cur); }
        ret
    }

    fn dfs(root: &Option<Rc<RefCell<TreeNode>>>, max: &mut i32, cur: &mut i32, count: &mut i32, ret: &mut Vec<i32>) {
        if let Some(x) = root {
            Solution::dfs(&x.borrow().left, max, cur, count, ret);
            let val = x.borrow().val;
            if *cur == val && *count !=0 {
                *count += 1;
            } else {
                if *count > *max { ret.clear();} 
                if *count >= *max {
                    // 存放之前遍历的最新的众数
                    ret.push(*cur);
                    // *max = 0 的 会被 *max = 1 覆盖
                    *max = *count;
                } 
                *cur = val;
                *count = 1;
            } 
            Solution::dfs(&x.borrow().right, max, cur, count, ret);
        } else {
            return;
        }
    }
}
// @lc code=end

