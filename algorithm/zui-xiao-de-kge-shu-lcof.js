/**
 * @desc 直接排序
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var getLeastNumbers = function(arr, k) {
    return arr.sort((a, b) => +a - +b).slice(0, k)
};

/**
 * @descr 快速排序
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var getLeastNumbers = function(arr, k) {
    quickSort(arr, 0, arr.length - 1)
    return arr.slice(0, k)
};

var quickSort = function(arr, low, high) {
    if (low >= high) return
    const base = arr[low]
    let l = low
    let r = high
    while (l < r) {
        while (l < r && arr[r] >= base) r--
        while (l < r && arr[l] <= base) l++
        [arr[l], arr[r]] = [arr[r], arr[l]]
    }
    [arr[low], arr[l]] = [arr[l], arr[low]]
    quickSort(arr, low, l - 1)
    quickSort(arr, l + 1, high)
}

/**
 * @desc 大顶堆
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var getLeastNumbers = function(arr, k) {
    const heap = new Heap(k)
    while (arr.length) {
        heap.push(arr.pop())
    }
    return heap.arr
};

class Heap {
    constructor(k) {
        this.arr = []
        this.size = k
    }

    push (val) {
        if (this.arr.length < this.size) {
            this.arr.push(val)
            this.sortBack()
        } else if (this.arr[0] > val) {
            this.arr[0] = val
            this.sortFront()
        }
    }

    sortBack () {
        let ind = this.arr.length - 1
        if (ind === 0) return
        while (ind > 0 && this.arr[ind] > this.arr[Math.floor((ind - 1) / 2)]) {
            [this.arr[ind], this.arr[Math.floor((ind - 1) / 2)]] = [this.arr[Math.floor((ind - 1) / 2)], this.arr[ind]]
            ind = Math.floor((ind - 1) / 2)
        }
    }

    sortFront () {
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