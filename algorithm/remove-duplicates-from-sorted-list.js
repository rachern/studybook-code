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
 var deleteDuplicates = function(head) {
    // 如果是空链表，直接返回null
    if (!head) return null
    // 定义两个指针分别指向头节点和下一个节点
    let p = head, q = head.next
    // 当q节点存在时
    while (q) {
        // 如果p的值 = q的值，q往前走一步
        if (p.val === q.val) {
            q = q.next
        } else {
            // p的值 ≠ q的值，p的下一个节点指向q
            p.next = q
            // p从q当前位置开始
            p = q
            // q从下一个节点开始
            q = q.next
        }
    }
    // 当q走到链表尾部时，直接删除p之后的节点
    p.next = null
    return head
};