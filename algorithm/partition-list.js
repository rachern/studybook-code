/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    // 定义两条新链表的虚拟头节点
    const minHead = new ListNode(-1, null)
    const maxHead = new ListNode(-1, null)
    let min = minHead, max = maxHead
    while (head) {
        // 如果小于x，拼接到小链表
        if (head.val < x) {
            min.next = head
            min = min.next
        } else {
            // 否则拼接到大链表
            max.next = head
            max = max.next
        }
        // 继续往前走
        head = head.next
    }
    // 需要把max下个节点指向null，防止它仍连接着小链表的节点
    max.next = null
    // 小链表的下个节点指向长链表的头节点
    min.next = maxHead.next
    return minHead.next
};