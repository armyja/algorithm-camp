/*
 * @lc app=leetcode.cn id=707 lang=rust
 *
 * [707] 设计链表
 */

// @lc code=start
use std::ptr::NonNull;
struct ListNode {
    val: i32,
    next: Option<Box<ListNode>>,
}

struct MyLinkedList {
    len: i32,
    head: Box<ListNode>,
    tail: NonNull<ListNode>,
}


/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MyLinkedList {

    fn new() -> Self {
        let mut head = Box::new(ListNode {
            val: 0,
            next: None,
        });
        let tail = unsafe { NonNull::new_unchecked(head.as_mut() as *mut _) };
        Self {
            len: 0,
            head,
            tail,
        }
    }

    fn _get_node(&self, index: i32) -> Option<&ListNode> {
        if index >= self.len {
            return None;
        }
        let mut node = self.head.as_ref();
        for _ in 0..(index+1) {
            node = unsafe { node.next.as_ref().unwrap_unchecked() };
        }
        Some(node)
    }

    fn _get_node_mut(&mut self, index: i32) -> Option<&mut ListNode> {
        if index >= self.len {
            return None;
        }
        let mut node = self.head.as_mut();
        for _ in 0..(index+1) {
            node = unsafe { node.next.as_mut().unwrap_unchecked() };
        }
        Some(node)
    }
    
    fn get(&self, index: i32) -> i32 {
        if let Some(node) = self._get_node(index) {
            node.val
        } else {
            -1
        }
    }
    
    fn add_at_head(&mut self, val: i32) {
        self.add_at_index(0, val);
    }
    
    fn add_at_tail(&mut self, val: i32) {
        let mut node = Box::new(ListNode {
            val,
            next: None,
        });
        let tail = unsafe { NonNull::new_unchecked(node.as_mut() as *mut _) };
        unsafe { self.tail.as_mut() }.next = Some(node);
        self.tail = tail;
        self.len += 1;
    }
    
    fn add_at_index(&mut self, mut index: i32, val: i32) {
        if index < 0 {
            index = 0;
        } else if index == self.len {
            return self.add_at_tail(val);
        }
        if let Some(last) = self._get_node_mut(index - 1) {
            last.next = Some(Box::new(ListNode {
                val,
                next: last.next.take(),
            }));
            self.len += 1;
        }
    }
    
    fn delete_at_index(&mut self, index: i32) {
        if index < 0 || index >= self.len {
            return;
        }
        let delete_last = self.len == index + 1;
        if let Some(mut last) = self._get_node_mut(index - 1) {
            last.next = last.next.take().and_then(|mut node| node.next.take());
            if delete_last {
                self.tail = unsafe { NonNull::new_unchecked(last as *mut _) };
            }
            self.len -= 1;
        }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * let obj = MyLinkedList::new();
 * let ret_1: i32 = obj.get(index);
 * obj.add_at_head(val);
 * obj.add_at_tail(val);
 * obj.add_at_index(index, val);
 * obj.delete_at_index(index);
 */
// @lc code=end

