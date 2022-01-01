/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
 var kthToLast = function(head, k) {
    // 定义快指针q，慢指针p
    let p = q = head
    // 快指针先走 k 步
    while (k--) {
        q = q.next
    }
    // 快慢指针同时走，当快指针走到null时结束
    while (next) {
        p = p.next
        q = q.next
    }
    // 返回 p 的值，即为倒数第 k 个节点
    return p.val
};