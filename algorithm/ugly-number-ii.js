/**
 * @param {number} n
 * @return {number}
 */
 var nthUglyNumber = function(n) {
    let p2 = p3 = p5 = 0
    const ans = [1]
    while (ans.length < n) {
        const min = Math.min(2 * ans[p2], 3 * ans[p3], 5 * ans[p5])
        ans.push(min)
        if(min === 2 * ans[p2]) p2++
        if(min === 3 * ans[p3]) p3++
        if(min === 5 * ans[p5]) p5++
    }
    return ans[ans.length - 1]
};


/**
 * @param {number} n
 * @return {number}
 */
 var nthUglyNumber = function(n) {
    const minHeap = new Heap()
    minHeap.push(1)
    let ans
    while(n--) {
        ans = minHeap.pop()
        if (ans % 5 === 0) {
            minHeap.push(ans * 5)
        } else if (ans % 3 === 0) {
            minHeap.push(ans * 3)
            minHeap.push(ans * 5)
        } else {
            minHeap.push(ans * 2)
            minHeap.push(ans * 3)
            minHeap.push(ans * 5)
        }
    }
    return ans
};

class Heap {
    constructor() {
        this.heap = []
    }

    push(val) {
        this.heap.push(val)
        this._sortBack()
    }

    pop() {
        const val = this.heap[0]
        const back = this.heap.pop()
        if(this.heap.length) {
            this.heap[0] = back
            this._sortFront()
        }
        return val
    }

    _sortBack() {
        let i = this.heap.length - 1
        while(i > 0 && this.heap[i] < this.heap[Math.floor((i - 1) / 2)]) {
            [this.heap[i], this.heap[Math.floor((i - 1) / 2)]] = [this.heap[Math.floor((i - 1) / 2)], this.heap[i]]
            i = Math.floor((i - 1) / 2)
        }
    }

    _sortFront() {
        let i = 0
        while (i * 2 + 1 < this.heap.length) {
            let temp = i
            if (this.heap[temp] > this.heap[i * 2 + 1]) temp = i * 2 + 1
            if (i * 2 + 2 < this.heap.length && this.heap[temp] > this.heap[i * 2 + 2]) temp = i * 2 + 2
            if (temp === i) break
            [this.heap[temp], this.heap[i]] = [this.heap[i], this.heap[temp]]
            i = temp
        }
    }
}