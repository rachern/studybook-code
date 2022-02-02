/**
 * @desc 直接排序
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    nums.sort((a, b) => a - b)
    return nums[nums.length - k]
};

/**
 * @desc 小顶堆
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    const minHeap = new Heap(k)
    while(nums.length) {
        minHeap.push(nums.pop())
    }
    return minHeap.pop()
};

class Heap {
    constructor(k) {
        this.arr = []
        this.k = k
    }

    size() {
        return this.arr.length
    }

    push(val) {
        if (this.size() < this.k) {
            this.arr.push(val)
            this._sortBack()
        } else if (val > this.arr[0]) {
            this.arr[0] = val
            this._sortFront()
        }
    }

    pop() {
        const val = this.arr[0]
        const back = this.arr.pop()
        if (this.arr.length) {
            this.arr[0] = back
            this._sortFront()
        }
        return val
    }

    _sortBack() {
        let i = this.arr.length - 1
        while(i > 0 && this.arr[i] < this.arr[Math.floor((i - 1) / 2)]) {
            [this.arr[i], this.arr[Math.floor((i - 1) / 2)]] = [this.arr[Math.floor((i - 1) / 2)], this.arr[i]]
            i = Math.floor((i - 1) / 2)
        }
    }

    _sortFront() {
        let i = 0 
        while (i * 2 + 1 < this.size()) {
            let temp = i
            if (this.arr[temp] > this.arr[i * 2 + 1]) temp = i * 2 + 1
            if (i * 2 + 2 < this.size() && this.arr[temp] > this.arr[i * 2 + 2]) temp = i * 2 + 2
            if (temp === i) break
            [this.arr[i], this.arr[temp]] = [this.arr[temp], this.arr[i]]
            i = temp 
        }
    }
}