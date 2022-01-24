/**
 * @desc 哈希表 + 小顶堆
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    const wordsCount = new Map()
    words.forEach(v => {
        if (!wordsCount.has(v)) wordsCount.set(v, 0)
        wordsCount.set(v, wordsCount.get(v) + 1)
    })
    const heap = new Heap(k)
    for(const [key, value] of wordsCount.entries()) {
        heap.push([key, value])
    }
    const ans = []
    while(heap.size()) {
        ans.unshift(heap.pop()[0])
    }
    return ans
};

class Heap{
    constructor(k) {
        this.heap = []
        this.k = k
    }

    size() {
        return this.heap.length
    }

    push(val) {
        if (this.size() < this.k) {
            this.heap.push(val)
            this.sortBack()
        } else if (this.compare(val, this.heap[0])) {
            this.heap[0] = val
            this.sortFront()
        }
    }

    pop() {
        const val = this.heap[0]
        const back = this.heap.pop()
        if (this.heap.length) {
            this.heap[0] = back
            this.sortFront()
        }
        return val
    }

    sortBack() {
        let i = this.size() - 1
        while (i > 0 && this.compare(this.heap[Math.floor((i - 1) / 2)], this.heap[i])) {
            [this.heap[i], this.heap[Math.floor((i - 1) /2)]] = [this.heap[Math.floor((i - 1) /2)], this.heap[i]]
            i = Math.floor((i - 1) / 2)
        }
    }

    sortFront() {
        let i = 0
        while (i * 2 + 1 < this.size()) {
            let temp = i
            if (this.compare(this.heap[temp], this.heap[i * 2 + 1])) temp = i * 2 + 1
            if (i * 2 + 2 < this.size() && this.compare(this.heap[temp], this.heap[i * 2 + 2])) temp = i * 2 + 2
            if (temp === i) break
            [this.heap[i], this.heap[temp]] = [this.heap[temp], this.heap[i]]
            i = temp
        }
    }

    compare(a, b) {
        if (a[1] !== b[1]) return a[1] > b[1]
        return a[0] < b[0]
    }
}



/**
 * @desc 哈希表 + 排序
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    const wordsMap = new Map()
    words.forEach(v => {
        if (!wordsMap.has(v)) wordsMap.set(v, 0)
        wordsMap.set(v, wordsMap.get(v) + 1)
    })
    const ans = []
    for(const key of wordsMap.keys()) {
        ans.push(key)
    }
    ans.sort((a, b) => {
        if (wordsMap.get(a) !== wordsMap.get(b)) return wordsMap.get(b) - wordsMap.get(a)
        return a.localeCompare(b)
    })
    return ans.slice(0, k)
};