/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @desc 双指针法
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    // 创建虚拟头节点
    const newNode = new ListNode(-1, head)
    // 定义两个指针指向虚拟头节点
    let pre = next = newNode
    // 快指针往前走n个位置
    while (n--) {
        next = next.next
    }
    // 快指针和慢指针同时移动，当快指针走到结尾时，慢指针指向删除节点的前一个节点
    while (next.next) {
        pre = pre.next
        next = next.next
    }
    // 将慢指针的下一个节点指向删除节点的下一个节点
    pre.next = pre.next.next
    // 返回头节点
    return newNode.next
};

/**
 * @desc 双重遍历
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    // 定义一个虚拟头节点
    const newNode = new ListNode(-1, head)
    // 定义一个指针指向虚拟头节点
    let p = newNode, k = 0
    // 获取链表的长度
    while (p.next) {
        p = p.next
        k++
    }
    // p指针指向虚拟头节点
    p = newNode
    // 从p节点走到删除节点前一个节点的距离
    let step = k - n
    // 走到删除节点的前一个节点
    while (step--) {
        p = p.next
    }
    // 删除倒数第n个节点
    p.next = p.next.next
    // 返回头节点
    return newNode.next
};