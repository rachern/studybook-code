/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @desc 双指针法
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let p = q = head
    while (k--) {
        q = q.next
    }
    while (q) {
        q = q.next
        p = p.next
    }
    return p
};

/**
 * @desc 两次循环
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
    let p = head, n = 0
    while (p) {
        p = p.next
        n++
    }
    let t = n - k
    p = head
    while (t--) {
        p = p.next
    }
    return p
};