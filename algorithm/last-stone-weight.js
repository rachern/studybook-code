/**
 * @desc 数组排序
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
    stones.sort((a, b) => a - b)
    while (stones.length > 1) {
        const one = stones.pop()
        const two = stones.pop()
        if (one !== two) {
            stones.push(Math.abs(one - two))
            stones.sort((a, b) => a - b)
        }
    }
    return stones.length ? stones.pop() : 0
};


/**
 * @desc 大顶堆
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const heap = new Heap()
    while (stones.length) heap.push(stones.pop())
    while (heap.size() > 1) {
        let one = heap.pop()
        let two = heap.pop()
        if (one !== two) heap.push(Math.abs(one - two)) 
    }
    return heap.size() ? heap.pop() : 0
};

class Heap {
    constructor() {
        this.arr = []
    }

    size () {
        return this.arr.length
    }

    pop() {
        const val = this.arr[0]
        const back = this.arr.pop()
        if (this.size()) {
            this.arr[0] = back
        }
        this.sortFront()
        return val
    }

    push(val) {
        this.arr.push(val)
        this.sortBack()
    }

    sortBack() {
        let ind = this.arr.length - 1
        while (ind > 0 && this.arr[ind] > this.arr[Math.floor((ind - 1) / 2)]) {
            [this.arr[ind], this.arr[Math.floor((ind - 1) / 2)]] = [this.arr[Math.floor((ind - 1) / 2)], this.arr[ind]]
            ind = Math.floor((ind - 1) / 2)
        }
    }

    sortFront() {
        if (!this.size()) return
        let ind = 0
        while (ind * 2 + 1 < this.arr.length) {
            let temp = ind
            if (this.arr[ind * 2 + 1] > this.arr[ind]) temp = ind * 2 + 1
            if (this.arr[ind * 2 + 2] !== undefined && this.arr[ind * 2 + 2] > this.arr[temp]) temp = ind * 2 + 2
            if (temp === ind) break
            [this.arr[ind], this.arr[temp]] = [this.arr[temp], this.arr[ind]]
            ind = temp 
        }
    }
}