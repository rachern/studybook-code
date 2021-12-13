// 迭代
var reverseList = function(head) {
    let pre = null, cur = head, next
    while (cur) {
        next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
};


// 递归
var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head
    }
    const node = reverseList(head.next)
    head.next.next = head
    head.next = null
    return node
};


// 另一种迭代
var reverseList = function(head) {
    if (!head) return null
    let cur = head, next
    while(head.next !== null) {
        next = head.next.next
        head.next.next = cur
        cur = head.next
        head.next = next
    }
    return cur
};