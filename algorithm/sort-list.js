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
 var sortList = function(head) {
    if (!head) return head
    let max = min = head.val, mid
    let p = head, q, h1 = null, h2 = null
    while(p) {
        max = Math.max(max, p.val)
        min = Math.min(min, p.val)
        p = p.next
    }
    if (max === min) return head
    mid = (max + min) / 2
    p = head
    while (p) {
        q = p.next
        if (p.val <= mid) {
            p.next = h1
            h1 = p
        } else {
            p.next = h2
            h2 = p
        }
        p = q
    }
    h1 = sortList(h1)
    h2 = sortList(h2)
    p = h1
    while(p && p.next) p = p.next
    p.next = h2
    return h1
};