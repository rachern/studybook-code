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
 var sortList = function(head) {
    if (!head) return head
    let max = min = head.val, mid
    let p = head, q, h1 = null, h2 = null
    while(p) {
        max = Math.max(max, p.val)
        min = Math.min(min, p.val)
        p = p.next
    }
    if (max === min) return head
    mid = (max + min) / 2
    p = head
    while (p) {
        q = p.next
        if (p.val <= mid) {
            p.next = h1
            h1 = p
        } else {
            p.next = h2
            h2 = p
        }
        p = q
    }
    h1 = sortList(h1)
    h2 = sortList(h2)
    p = h1
    while(p && p.next) p = p.next
    p.next = h2
    return h1
};


/**
 * @desc 归并排序
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function(head) {
    let n = 0
    let p = head
    while (p) {
        p = p.next
        n++
    }
    return mergeSort(head, n)
};

var mergeSort = function (head, n) {
    if (!head || !head.next) return head
    let mid = Math.floor(n / 2)
    let p = head, lp = head, rp
    for (let i = 1; i < mid; i++) p = p.next
    rp = p.next
    p.next = null
    lp = mergeSort(lp, mid)
    rp = mergeSort(rp, n - mid)
    const newHead = new ListNode()
    p = newHead
    while (lp || rp) {
        if (rp === null || (lp && lp.val < rp.val)) {
            p.next = lp
            lp = lp.next
        } else {
            p.next = rp
            rp = rp.next
        }
        p = p.next
    }
    return newHead.next
}