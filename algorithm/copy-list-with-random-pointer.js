/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    // 如果链表为空，直接返回null
    if (!head) return null
    let p = head
    // 从头结点开始，依次复制节点的值并插入到当前节点与下一节点之间
    while (p) {
        const newNode = new Node(p.val)
        newNode.next = p.next
        p.next = newNode
        p = p.next.next
    }
    p = head
    // 从头节点开始
    // 如果原节点的random存在，每个复制节点的random指向原节点random的下一个节点
    // 如果原节点的random不存在，则指向null
    while (p) {
        p.next.random = p.random ? p.random.next : p.random
        p = p.next.next
    }
    p = head
    const newHead = new Node(-1, p.next)
    // 从头节点开始，分离两个链表
    while (p) {
        const newNode = p.next
        p.next = p.next.next
        newNode.next = newNode.next ? newNode.next.next : null
        p = p.next
    }
    // 返回新的链表
    return newHead.next
};