/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var rangeSum = function(nums, n, left, right) {
    const MOD = Math.pow(10, 9) + 7
    const minHeap = new Heap(n)
    for(let i = 0; i < n; i++) {
        minHeap.push([i, nums[i] % MOD])
    }
    let ans = 0
    for(let i = 1; i <= right; i++) {
        const k = minHeap.pop()
        if(i >= left) ans = (ans + k[1]) % MOD
        if(k[0] < n - 1) minHeap.push([k[0] + 1, (k[1] + nums[k[0] + 1]) % MOD])
    }
    return ans
};

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
        const back = this.heap.pop()
        back && this.heap.unshift(back)
        this._sortFront()
        return val
    }

    _sortBack() {
        let i = this.heap.length - 1
        while(i > 0 && this.heap[i][1] < this.heap[Math.floor((i - 1) / 2)][1]) {
            [this.heap[i], this.heap[Math.floor((i - 1) / 2)]] = [this.heap[Math.floor((i - 1) / 2)], this.heap[i]]
            i = Math.floor((i - 1) / 2)
        }
    }

    _sortFront() {
        let i = 0
        while(i * 2 + 1 < this.heap.length) {
            let temp = i
            if (this.heap[temp][1] > this.heap[i * 2 + 1][1]) temp = i * 2 + 1
            if (i * 2 + 2 < this.heap.length && this.heap[temp][1] > this.heap[i * 2 + 2][1]) temp = i * 2 + 2
            if (temp === i) return 
            [this.heap[i], this.heap[temp]] = [this.heap[temp], this.heap[i]]
            i = temp
        }
    }
}