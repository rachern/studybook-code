/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
 var splitListToParts = function(head, k) {
    let n = 0, p = head
    const res = []
    while (p) {
        n++
        p = p.next
    }
    var num1 = Math.floor(n / k)
    var num2 = n % k
    p = head
    for(let i = 0; i < k; i++) {
        res.push(p)
        if (!p) continue
        let num3 = i < num2 ? num1 + 1 : num1
        while (--num3) {
            p = p.next
        }
        const temp = p.next
        p.next = null
        p = temp
    }
    return res
};