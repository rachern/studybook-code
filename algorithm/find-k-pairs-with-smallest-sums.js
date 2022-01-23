/**
 * @descr 大顶堆
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
 var kSmallestPairs = function(nums1, nums2, k) {
    const heap = new Heap(k)
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (heap.size() < k) {
                heap.push([nums1[i], nums2[j]])
            } else {
                if (compare([nums1[i], nums2[j]], heap.top()) >= 0) break
                heap.push([nums1[i], nums2[j]])
            }
        }
    }
    return heap.getHeap()
};

class Heap {
    constructor(k) {
        this.heap = []
        this.k = k
    }

    getHeap() {
        return this.heap
    }

    size() {
        return this.heap.length
    }

    top() {
        return this.heap[0]
    }

    push(val) {
        if (this.size() < this.k) {
            this.heap.push(val)
            this.sortBack()
        } else if (compare(val, this.heap[0]) < 0) {
            this.heap[0] = val
            this.sortFront()
        }
    }

    sortBack() {
        let i = this.heap.length - 1
        while (i > 0 && compare(this.heap[i], this.heap[Math.floor((i - 1) / 2)]) > 0) {
            [this.heap[i], this.heap[Math.floor((i - 1) / 2)]] = [this.heap[Math.floor((i - 1) / 2)], this.heap[i]]
            i = Math.floor((i - 1) / 2)
        }
    }

    sortFront() {
        let i = 0
        while (i * 2 + 1 < this.heap.length) {
            let temp = i
            if (compare(this.heap[temp], this.heap[i * 2 + 1]) < 0) temp = i * 2 + 1
            if (i * 2 + 2 < this.heap.length && compare(this.heap[temp], this.heap[i * 2 + 2]) < 0) temp = i * 2 + 2
            if (temp === i) break
            [this.heap[temp], this.heap[i]] = [this.heap[i], this.heap[temp]]
            i = temp
        }
    }
}

var compare = function(a, b) {
    return a[0] + a[1] - b[0] - b[1]
}