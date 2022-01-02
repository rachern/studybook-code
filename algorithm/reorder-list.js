/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @desc 利用数组
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    const arr = []
    let p = head
    // 为了使用节点的下标，将节点都保存到数组中
    while (p) {
        arr.push(p)
        p = p.next
    }
    let i = 0; j = arr.length - 1
    while (i < j) {
        arr[i].next = arr[j]
        i++
        // 当 i === j 时，说明 j 是 i 的下一位，不需要再进行交换
        if (i === j) {
            break
        }
        arr[j].next = arr[i]
        j--
    }
    // 需要将尾节点的 next 指向 null，否则会形成环形链表
    arr[i].next = null
    return arr[0]
};


/**
 * @desc 链表反转再拼接
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    // 如果链表为空或者只有一个节点，不需要重排
    if (!head || !head.next) return head
    // 定义快慢指针
    let p = head, q = head.next
    // 当 q 走到 null 或者链表最后一个节点时，p 走到链表中点
    while (q && q.next) {
        p = p.next
        q = q.next.next
    }
    // 将链表的后半段翻转
    const newList = reverse(p.next)
    p.next = null
    p = head
    q = newList
    // 将两个链表拼接成一个
    while (q) {
        const q_next = q.next
        q.next = p.next
        p.next = q
        p = p.next.next
        q = q_next
    }
    return head
};
// 翻转链表
var reverse = function (head) {
    let p = head, next = p.next
    while (head.next) {
        head.next = head.next.next
        next.next = p
        p = next
        next = head.next
    }
    return p
}