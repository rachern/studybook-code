/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
    const vHead = new ListNode(-1, head)
    let p = vHead
    while (p.next.val !== val) {
        p = p.next
    }
    p.next = p.next.next
    return vHead.next
};