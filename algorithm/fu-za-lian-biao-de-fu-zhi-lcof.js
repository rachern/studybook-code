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
    // 从头节点开始，复制链表的每个节点，并将其插入到当前节点与下个节点之间
    while (p) {
        const newNode = new Node(p.val)
        newNode.next = p.next
        p.next = newNode
        p = p.next.next
    }
    p = head
    // 从头节点开始，将新节点的random指向原节点的random的下一个节点
    while (p) {
        p.next.random = p.random ? p.random.next : p.random
        p = p.next.next
    }
    p = head
    // 定义虚拟头节点，指向复制链表的头节点
    const newHead = new Node(-1, p.next)
    // 从头节点开始，拆分原链表和复制链表
    while(p) {
        const newNode = p.next
        p.next = p.next.next
        newNode.next = newNode.next ? newNode.next.next : null
        p = p.next
    }
    // 返回复制链表
    return newHead.next
};