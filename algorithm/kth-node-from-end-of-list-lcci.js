/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @desc 双指针
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
 var kthToLast = function(head, k) {
    // 定义快指针q，慢指针p
    let p = q = head
    // 快指针先走 k 步
    while (k--) {
        q = q.next
    }
    // 快慢指针同时走，当快指针走到null时结束
    while (next) {
        p = p.next
        q = q.next
    }
    // 返回 p 的值，即为倒数第 k 个节点
    return p.val
};

/**
 * @desc 两次循环
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
    // 定义 n 记录链表长度，p 指针指向头节点
    let n = 0, p = head
    // p 指针遍历整个链表，记录链表长度
    while (p) {
        p = p.next
        n++
    }
    // p 指针从头节点重新开始
    p = head
    // 计算 n - k 的值，即 p 指针需要走几步到达倒数第 k 个节点
    let t = n - k
    // p 指针往前走 t 步
    while (t--) {
        p = p.next
    }
    // 返回 p 指针指向节点的值
    return p.val
};