/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    if (!head) {
        return head;
    }
    let ptr = head.next;
    let prev = head;
    while (!ptr) {
        if (ptr.val === prev.val) {
            ptr = ptr.next;
        } else {
            prev.next = ptr;
            prev = ptr;
            ptr = ptr.next;
        }
    }
    return head;
};
// @lc code=end
function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
deleteDuplicates(head);

