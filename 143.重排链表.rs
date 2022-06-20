/*
 * @lc app=leetcode.cn id=143 lang=rust
 *
 * [143] 重排链表
 */
struct  Solution{}

#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
  pub val: i32,
  pub next: Option<Box<ListNode>>
}

impl ListNode {
  #[inline]
  fn new(val: i32) -> Self {
    ListNode {
      next: None,
      val
    }
  }
}

// @lc code=start
// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
//
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
  pub fn reorder_list(head: &mut Option<Box<ListNode>>) {
      if head.is_none() {
          return;
      }

      let mut len = 0;
      let mut tmp = head.as_ref();
      while tmp.is_some() {
          len += 1;
          tmp = tmp.unwrap().next.as_ref();
      }

      let len = len / 2;
      let mut node = head.as_mut();
      for _ in 0..len {
          node = node.unwrap().next.as_mut();
      }

      let mut node = node.unwrap().next.take();
      let mut stack = Vec::new();
      while node.is_some() {
          let tmp = node.as_mut().unwrap().next.take();
          stack.push(node);
          node = tmp;
      }

      let mut curr = head.as_mut().unwrap();
      while stack.len() > 0 {
          let mut node = stack.pop().unwrap();
          node.as_mut().unwrap().next = curr.next.take();
          curr.next = node;
          curr = curr.next.as_mut().unwrap().next.as_mut().unwrap();
      }
  }
}
// @lc code=end

