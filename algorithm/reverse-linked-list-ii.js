/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @desc 解法一：先对需要反转的链表进行反转，然后再拼接上反转链表的前后节点
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    const newHead = new ListNode(-1, head)
    let pre = newHead, cur = head, next
    let n = right - left + 1
    while(--left) {
        // 反转链表的前一个节点
        pre = pre.next
        // 反转链表开始的节点
        cur = cur.next
    }
    while(--n) {
        // 反转链表结束的节点
        cur = cur.next
    }
    //  反转链表的下一个节点
    next = cur.next
    cur.next = null
    const reverseHead = reverseList(pre.next, next)
    pre.next = reverseHead
    return newHead.next
};

var reverseList = function(head, next) {
    let pre = head, cur = head.next
    while (head.next) {
        head.next = cur.next
        cur.next = pre
        pre = cur
        cur = head.next
    }
    head.next = next
    return pre
}


/**
 * @desc 解法二：一次遍历，通过将每次遍历到的节点插入到反转链表的前一个节点和当前开始节点之间（头插法）
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    const newNode = new ListNode(-1, head)
    let pre = newNode, cur = head
    let n = right - left + 1
    while (--left) {
        pre = pre.next
        cur = cur.next
    }
    while (--n) {
        const q = cur.next
        cur.next = q.next
        q.next = pre.next
        pre.next = q
    }
    return newNode.next
};