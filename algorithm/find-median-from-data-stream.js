var MedianFinder = function() {
    this.minHeap = new Heap(0)
    this.maxHeap = new Heap(1)
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.minHeap.size() && num < this.minHeap.top()) {
        this.maxHeap.push(num)
        while (this.maxHeap.size() > this.minHeap.size()) {
            this.minHeap.push(this.maxHeap.pop())
        }
    } else {
        this.minHeap.push(num)
        while (this.minHeap.size() - this.maxHeap.size() > 1) {
            this.maxHeap.push(this.minHeap.pop())
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.minHeap.size() !== this.maxHeap.size()) return this.minHeap.top()
    return (this.maxHeap.top() + this.minHeap.top()) / 2
};

class Heap {
    constructor(type) {
        this.arr = []
        this.type = type
    }

    top() {
        return this.arr[0]
    }

    size() {
        return this.arr.length
    }

    push(val) {
        this.arr.push(val)
        this._sortBack()
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
        if (this.type === 1) {
            // 大顶堆
            while(i > 0 && this.arr[i] > this.arr[Math.floor((i - 1) / 2)]) {
                [this.arr[i], this.arr[Math.floor((i - 1) / 2)]] = [this.arr[Math.floor((i - 1) / 2)], this.arr[i]]
                i = Math.floor((i - 1) / 2)
            }
        } else {
            // 小顶堆
            while(i > 0 && this.arr[i] < this.arr[Math.floor((i - 1) / 2)]) {
                [this.arr[i], this.arr[Math.floor((i - 1) / 2)]] = [this.arr[Math.floor((i - 1) / 2)], this.arr[i]]
                i = Math.floor((i - 1) / 2)
            }
        }
    }

    _sortFront() {
        let i = 0
        while(i * 2 + 1 < this.arr.length) {
            let temp = i
            if (this.type === 1) {
                // 大顶堆
                if (this.arr[temp] < this.arr[i * 2 + 1]) temp = i * 2 + 1
                if (i * 2 + 2 < this.arr.length && this.arr[temp] < this.arr[i * 2 + 2]) temp = i * 2 + 2
            } else {
                // 小顶堆
                if (this.arr[temp] > this.arr[i * 2 + 1]) temp = i * 2 + 1
                if (i * 2 + 2 < this.arr.length && this.arr[temp] > this.arr[i * 2 + 2]) temp = i * 2 + 2
            }
            if (temp === i) break
            [this.arr[temp], this.arr[i]] = [this.arr[i], this.arr[temp]]
            i = temp
        }
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */