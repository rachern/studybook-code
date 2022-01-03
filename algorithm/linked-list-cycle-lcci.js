/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @desc 快慢指针
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    if (!head || !head.next) return null
    let p = q = head
    do {
        p = p.next
        q = q.next.next
    } while (p !== q && q !== null && q.next !== null)
    if (p !== q) return null
    q = head
    while (p !== q) {
        p = p.next
        q = q.next 
    }
    return p
};


/**
 * @desc 哈希表
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    if (!head || !head.next) return null
    let p = head
    const map = new Map()
    while (p && !map.has(p)) {
        map.set(p, p)
        p = p.next
    }
    return !p ? null : p
};