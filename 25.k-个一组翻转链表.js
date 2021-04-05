/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let tail = dummyHead;
    let prevEnd = dummyHead;
    while (head) {
        for (let i = 0; i < k; i++) {
            tail = tail.next;
            if (tail === null) {
                return dummyHead.next;
            }
        }
        let nextStart = tail.next;
        [head, tail] = reverse(head, tail);
        prevEnd.next = head;
        tail.next = nextStart;
        head = nextStart;
        prevEnd = tail;
    }
    return dummyHead.next;
}

var reverse = function(head, tail) {
    let prev = tail.next;
    let curr = head;
    while (prev !== tail) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return [tail, head];
}
  

// @lc code=end

