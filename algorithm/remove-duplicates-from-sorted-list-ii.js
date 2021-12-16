/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @desc 迭代法
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    // 如果是空链表或者只有一个节点，直接返回
    if (!head || !head.next) return head
    // 定义一个虚拟头节点
    const newNode = new ListNode(-1, head)
    let pre = newNode, cur = pre.next
    while (cur) {
        // 如果当前节点和下一节点的值相等，当前节点往前走一步
        while (cur.next && cur.val === cur.next.val) {
            cur = cur.next
        }
        if (pre.next === cur) {
            // 如果pre的下一个节点就是cur，pre指向pre.next
            pre = pre.next
        } else {
            // 如果pre的下一个节点不是cur，说明cur前面有相同的值，pre指向cur的下一个节点
            pre.next = cur.next
        }
        // cur指向pre下一个节点
        cur = pre.next
    }
    return newNode.next
};

/**
 * @desc 递归调用
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    // 如果链表为空或者只有一个节点，直接返回
    if (!head || !head.next) return head
    // 如果头节点和下一节点的值不同，head指向递归结果
    if (head.val !== head.next.val) {
        head.next = deleteDuplicates(head.next)
    } else {
        // 找到下一个不等于head的节点
        let p = head.next
        while (p.next && p.next.val === head.val) {
            p = p.next
        }
        // 递归调用p.next
        return deleteDuplicates(p.next)
    }
    return head
};