/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    if (!head || !head.next) return head
    const maxHead = new ListNode(-1), minHead = new ListNode(-1)
    let p = maxHead, q = minHead
    while (head) {
        if (head.val < x) {
            q.next = head
            q = q.next
            head = head.next
            q.next = null
        } else {
            p.next = head
            p = p.next
            head = head.next
            p.next = null
        }
    }
    q.next = maxHead.next
    return minHead.next
};