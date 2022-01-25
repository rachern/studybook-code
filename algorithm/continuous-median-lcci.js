/**
 * initialize your data structure here.
 */
 var MedianFinder = function() {
    this.arr = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.arr.push(num)
    this.arr.sort((a, b) => a - b)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.arr.length % 2 === 1) return this.arr[Math.floor(this.arr.length / 2)]
    return (this.arr[this.arr.length / 2] + this.arr[this.arr.length / 2 - 1]) / 2
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */


/**
 * initialize your data structure here.
 */
 var MedianFinder = function() {
    this.frontArr = []
    this.backArr = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (!this.frontArr.length || num > this.frontArr[this.frontArr.length - 1]) {
        this.backArr.push(num)
        this.backArr.sort((a, b) => a - b)
        while (this.backArr.length - this.frontArr.length > 1) {
            this.frontArr.push(this.backArr.shift())
        }
        this.frontArr.sort((a, b) => a - b)
    } else {
        this.frontArr.push(num)
        this.frontArr.sort((a, b) => a - b)
        while (this.frontArr.length > this.backArr.length) {
            this.backArr.unshift(this.frontArr.pop())
        }
        this.backArr.sort((a, b) => a - b)
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.frontArr.length === this.backArr.length) return (this.frontArr[this.frontArr.length - 1] + this.backArr[0]) / 2
    return this.backArr[0]
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

/**
 * @desc 大小顶堆
 * initialize your data structure here.
 */
 var MedianFinder = function() {
    this.frontHeap = new Heap(1)
    this.backHeap = new Heap(-1)
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.frontHeap.size() && num < this.frontHeap.top()) {
        this.frontHeap.push(num)
        while (this.frontHeap.size() > this.backHeap.size()) {
            this.backHeap.push(this.frontHeap.pop())
        }
    } else {
        this.backHeap.push(num)
        while (this.backHeap.size() - this.frontHeap.size() > 1) {
            this.frontHeap.push(this.backHeap.pop())
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.frontHeap.size() === this.backHeap.size()) return (this.frontHeap.top() + this.backHeap.top()) / 2
    return this.backHeap.top()
};

class Heap {
    constructor(type) {
        this.arr = []
        this.type = type // -1 小顶堆  1 大顶堆
    }

    size() {
        return this.arr.length
    }

    top() {
        return this.arr[0]
    }

    push(val) {
        this.arr.push(val)
        this.sortBack()
    }

    pop() {
        const val = this.arr[0]
        const back = this.arr.pop()
        if (this.size()) {
            this.arr[0] = back
            this.sortFront()
        }
        return val
    }

    sortBack() {
        let i = this.size() - 1
        if (this.type === -1) {
            while (i > 0 && this.arr[i] < this.arr[Math.floor((i - 1) / 2)]) {
                [this.arr[i], this.arr[Math.floor((i - 1) / 2)]] = [this.arr[Math.floor((i - 1) / 2)], this.arr[i]]
                i = Math.floor((i - 1) / 2)
            }
        } else {
            while (i > 0 && this.arr[i] > this.arr[Math.floor((i - 1) / 2)]) {
                [this.arr[i], this.arr[Math.floor((i - 1) / 2)]] = [this.arr[Math.floor((i - 1) / 2)], this.arr[i]]
                i = Math.floor((i - 1) / 2)
            }
        }
    }

    sortFront() {
        let i = 0
        if (this.type === -1) {
            while (i * 2 + 1 < this.size()) {
                let temp = i
                if (this.arr[temp] > this.arr[i * 2 + 1]) temp = i * 2 + 1
                if (i * 2 + 2 < this.size() && this.arr[temp] > this.arr[i * 2 + 2]) temp = i * 2 + 2
                if (temp === i) break
                [this.arr[temp], this.arr[i]] = [this.arr[i], this.arr[temp]]
                i = temp
            }
        } else {
            while (i * 2 + 1 < this.size()) {
                let temp = i
                if (this.arr[temp] < this.arr[i * 2 + 1]) temp = i * 2 + 1
                if (i * 2 + 2 < this.size() && this.arr[temp] < this.arr[i * 2 + 2]) temp = i * 2 + 2
                if (temp === i) break
                [this.arr[temp], this.arr[i]] = [this.arr[i], this.arr[temp]]
                i = temp
            }
        }
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */