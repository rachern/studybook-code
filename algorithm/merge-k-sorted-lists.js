/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 class Heap {
    constructor(k) {
        this.heap = []
        this.k = k 
    }
    
    push(val) {
        this.heap.push(val)
        this._sortBack()
    }

    pop() {
        const val = this.heap.shift()
        if (this.heap.length) {
            this.heap.unshift(this.heap.pop())
            this._sortFront()
        }
        return val
    }

    _sortBack() {
        let i = this.heap.length - 1
        while(i > 0 && this.heap[i].val < this.heap[Math.floor((i - 1) / 2)].val) {
            [this.heap[i], this.heap[Math.floor((i - 1) / 2)]] = [this.heap[Math.floor((i - 1) / 2)], this.heap[i]]
            i = Math.floor((i - 1) / 2)
        }
    }

    _sortFront() {
        let i = 0
        while(i * 2 + 1 < this.heap.length) {
            let temp = i
            if (this.heap[temp].val > this.heap[i * 2 + 1].val) temp = i * 2 + 1
            if (i * 2 + 2 < this.heap.length && this.heap[temp].val > this.heap[i * 2 + 2].val) temp = i * 2 + 2
            if(temp === i) return
            [this.heap[i], this.heap[temp]] = [this.heap[temp], this.heap[i]]
            i = temp 

        }
    }
}

var mergeKLists = function(lists) {
    if(!lists.length) return null
    const minHeap = new Heap(lists.length)
    for (let i = 0; i < lists.length; i++) {
        const node = lists[i]
        if(node) {
            minHeap.push({val: node.val, root: node})
        }
    }
    if(!minHeap.heap.length) return null
    const head = new ListNode()
    let p = head, root = minHeap.pop().root
    while(root) {
        p.next = root
        p = p.next
        if (root.next) minHeap.push({val: root.next.val,  root: root.next})
        const node = minHeap.pop()
        root = node ? node.root : node
    }
    return head.next
};