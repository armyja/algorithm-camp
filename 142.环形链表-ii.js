/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            let ptr = head;
            while (ptr !== slow) {
                slow = slow.next;
                ptr = ptr.next;
            }
            return ptr;
        }
    }
    return null;
};
// @lc code=end

