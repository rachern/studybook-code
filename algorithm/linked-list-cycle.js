// 暴力破解法
const hasCycle = function(head) {
    if (!head || head.next === null) return false
    let p = head
    const arr = []
    while (p !== null) {
        if (!arr.includes(p)) {
            arr.push(p)
            p = p.next
        } else {
            return true
        }
    }
    return false
};

// 快慢指针法
const hasCycle = function(head) {
    if (!head || head.next === null) return false
    let p = q = head
    do {
        p = p.next
        q = q.next.next
    } while(p !== q && q !== null && q.next !== null)
    return p === q
};