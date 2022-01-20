/**
 * @desc 直接排序
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    this.arr = nums
    this.k = k
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.arr.push(val)
    this.arr.sort((a, b) => a - b)
    return this.arr[this.arr.length - this.k]
};


/**
 * @desc 从大到小排序，维护前 k 位
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    nums.sort((a, b) => b - a)
    this.arr = nums.slice(0, k)
    this.k = k
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.arr.length < this.k) {
        this.arr.push(val)
        this.arr.sort((a, b) => b - a)
    } else if (val > this.arr[this.k - 1]) {
        this.arr[this.k - 1] = val
        this.arr.sort((a, b) => b - a)
    }
    return this.arr[this.k - 1]
};


/**
 * @desc 小顶堆
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    this.heap = new Heap(k)
    while (nums.length) {
        this.heap.push(nums.pop())
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.push(val)
    return this.heap.top()
};

class Heap {
    constructor(k) {
        this.arr = []
        this.k = k
    }

    size() {
        return this.arr.length
    }

    top() {
        return this.arr[0]
    }

    push(val) {
        if (this.size() < this.k) {
            this.arr.push(val)
            this.sortBack()
        } else if (val > this.arr[0]) {
            this.arr[0] = val
            this.sortFront()
        }
    }

    sortBack() {
        let i = this.arr.length - 1
        while (i > 0 && this.arr[i] < this.arr[Math.floor((i - 1) / 2)]) {
            [this.arr[i], this.arr[Math.floor((i - 1) / 2)]] = [this.arr[Math.floor((i - 1) / 2)], this.arr[i]]
            i = Math.floor((i - 1) / 2)
        }
    }

    sortFront() {
        let i = 0 
        while (i * 2 + 1 < this.size()) {
            let temp = i
            if (this.arr[i * 2 + 1] < this.arr[temp]) temp = i * 2 + 1
            if (this.arr[i * 2 + 2] !== undefined && this.arr[i * 2 + 2] < this.arr[temp]) temp = i * 2 + 2
            if (i === temp) break
            [this.arr[i], this.arr[temp]] = [this.arr[temp], this.arr[i]]
            i = temp
        }
    }
}