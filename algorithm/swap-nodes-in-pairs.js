/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @desc 迭代
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    if (!head || !head.next) return head
    const newNode = new ListNode(-1, head)
    let pre = newNode
    let cur = head, next
    while (cur && cur.next) {
        next = cur.next
        pre.next = next
        cur.next = next.next
        next.next = cur
        pre = cur
        cur = cur.next
    }
    return newNode.next
};

/**
 * @desc 递归
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    if (!head || !head.next) return head
    const next = head.next
    head.next= swapPairs(next.next)
    next.next = head
    return next
};