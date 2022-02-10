/**
 * @desc 小顶堆
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    const map = new Map()
    nums.map(v => {
        if (!map.has(v)) {
            map.set(v, 1)
        } else {
            map.set(v, map.get(v) + 1)
        }
    })

    const minHeap = new Heap(k)
    for(let item of map.entries()) {
        minHeap.push(item)
    }
    return minHeap.toArray()
};

class Heap {
    constructor(k) {
        this.k = k
        this.arr = []
    }

    toArray() {
        return this.arr.map(v => {return v[0]})
    }

    push(val) {
        if (this.arr.length < this.k) {
            this.arr.push(val)
            this._sortBack()
        } else if (val[1] > this.arr[0][1]) {
            this.arr[0] = val
            this._sortFront()
        }
    }

    _sortBack() {
        let i = this.arr.length - 1
        while(i > 0 && this.arr[Math.floor((i - 1) / 2)][1] > this.arr[i][1]) {
            [this.arr[Math.floor((i - 1) / 2)], this.arr[i]] = [this.arr[i], this.arr[Math.floor((i - 1) / 2)],]
            i = Math.floor((i - 1) / 2)
        }
    }

    _sortFront() {
        let i = 0
        while (i * 2 + 1 < this.arr.length) {
            let temp = i
            if (this.arr[temp][1] > this.arr[i * 2 + 1][1]) temp = i * 2 + 1
            if (i * 2 + 2 < this.arr.length && this.arr[temp][1] > this.arr[i * 2 + 2][1]) temp = i * 2 + 2
            if (temp === i) break
            [this.arr[i], this.arr[temp]] = [this.arr[temp], this.arr[i]]
            i = temp
        }
    }
}

/**
 * @desc 直接排序
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    const map = new Map()
    nums.map(v => {
        if(!map.has(v)) {
            map.set(v, 1)
        } else {
            map.set(v, map.get(v) + 1)
        }
    })
    const arr = [...map.keys()]
    arr.sort((a, b) => map.get(b) - map.get(a))
    return arr.slice(0, k)
};