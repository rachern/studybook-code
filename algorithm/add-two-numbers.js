/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    // 用于记录进位
    let sign = 0
    // 定义虚拟头节点
    const newHead = new ListNode(-1)
    let p = newHead
    while (l1 || l2) {
        // 如果 l1 或者 l2 不存在，则加 0
        const l1_val = l1 ? l1.val : 0,
              l2_val = l2 ? l2.val : 0,
              // 每一位的结果由 l1 + l2 + sign
              sum = l1_val + l2_val + sign
        // 下一个节点为和的个位上的数
        p.next = new ListNode(sum % 10)
        // p 指针往前走
        p = p.next
        // 进位为和的十位上的数
        sign = Math.floor(sum / 10)
        // 如果 l1 或者 l2不为空，则指向其下一个节点
        l1 = l1 ? l1.next : l1
        l2 = l2 ? l2.next : l2
    }
    if (sign) p.next = new ListNode(sign)
    // 返回链表头节点
    return newHead.next
};