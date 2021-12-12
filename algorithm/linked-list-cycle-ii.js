// Map解法
var detectCycle = function(head) {
    if (!head || head.next === null) return null

    const mapper = new Map()
    let p = head
    while(p) {
        if (!mapper.has(p)) {
            mapper.set(p, p)
            p = p.next
        } else {
            return p
        }
    }
    return null
};


// 快慢指针法
var detectCycle = function(head) {
    if (!head || head.next === null) return null

    let p = q = head
    do {
        p = p.next
        q = q.next.next
    } while (p !== q && q && q.next)

    // 如果不是因为相遇退出循环，则表示不存在环
    if (p !== q) return null
    // 两个指针分别从头节点和相遇节点开始遍历，相遇点即为入环点
    p = head
    while (p !== q) {
        p = p.next
        q = q.next
    }
    return p
};