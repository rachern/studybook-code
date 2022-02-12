/**
 * @desc 直接排序
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    points.sort((a, b) => (a[0]*a[0] + a[1]*a[1]) - (b[0]*b[0] + b[1]*b[1]))
    return points.slice(0, k)
};

/**
 * @desc 大顶堆
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    const maxHeap = new Heap(k)
    points.forEach(v => {
        maxHeap.push(v)
    })
    return maxHeap.toArray()
};

var powAdd = function(val) {
    return val[0] * val[0] + val[1] * val[1]
}

class Heap {
    constructor(k) {
        this.k = k
        this.arr = []
    }

    toArray() {
        return this.arr
    }

    push(val) {
        if (this.arr.length < this.k) {
            this.arr.push(val)
            this._sortBack()
        } else if (powAdd(val) < powAdd(this.arr[0])) {
            this.arr[0] = val
            this._sortFront()
        }
    }

    _sortBack() {
        let i = this.arr.length - 1
        while (i > 0 && powAdd(this.arr[i]) > powAdd(this.arr[Math.floor((i - 1) / 2)])) {
            [this.arr[i], this.arr[Math.floor((i - 1) / 2)]] = [this.arr[Math.floor((i - 1) / 2)], this.arr[i]]
            i = Math.floor((i - 1) / 2)
        }
    }

    _sortFront() {
        let i = 0
        while(i * 2 + 1 < this.arr.length) {
            let temp = i
            if (powAdd(this.arr[temp]) < powAdd(this.arr[i * 2 + 1])) temp = i * 2 + 1
            if (i * 2 + 2 < this.arr.length && powAdd(this.arr[temp]) < powAdd(this.arr[i * 2 + 2])) temp = i * 2 + 2
            if (temp === i) break
            [this.arr[temp], this.arr[i]] = [this.arr[i], this.arr[temp]]
            i = temp
        }
    }
}