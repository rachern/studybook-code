/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
 var smallestStringWithSwaps = function(s, pairs) {
    const unionSet = new UnionSet(s.length)
    for (const pair of pairs) {
        unionSet.merge(pair[0], pair[1])
    }

    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        const root = unionSet.get(i)
        if (!map.has(root)) map.set(root, new Heap())
        map.get(root).push(s[i])
    }

    let str = ''
    for (let i = 0; i< s.length; i++) {
        const root = unionSet.get(i)
        str += map.get(root).pop()
    }

    return str
};

class UnionSet {
    constructor(n) {
        this.fa = []
        this.size = []
        for(let i = 0; i < n; i++) {
            this.fa[i] = i
            this.size[i] = 1
        }
    }

    get(v) {
        if(this.fa[v] === v) return v
        const root = this.get(this.fa[v])
        this.fa[v] = root
        return root
    }

    merge(a, b) {
        const ra = this.get(a), rb = this.get(b)
        if (ra === rb) return
        if (this.size[ra] < this.size[rb]) {
            this.fa[ra] = rb
            this.size[rb] += this.size[ra]
        } else {
            this.fa[rb] = ra
            this.size[ra] += this.size[rb]
        }
    }
}

class Heap {
    constructor() {
        this.arr = []
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
        while (i > 0 && this.arr[i] < this.arr[Math.floor((i - 1) / 2)]) {
            [this.arr[i], this.arr[Math.floor((i - 1) / 2)]] = [this.arr[Math.floor((i - 1) / 2)], this.arr[i]]
            i = Math.floor((i - 1) / 2)
        }
    }

    _sortFront() {
        let i = 0
        while (2 * i + 1 < this.arr.length) {
            let temp = i
            if (this.arr[temp] > this.arr[2 * i + 1]) temp = 2 * i + 1
            if (2 * i + 2 < this.arr.length && this.arr[temp] > this.arr[2 * i + 2]) temp = 2 * i + 2
            if (temp === i) break
            [this.arr[temp], this.arr[i]] = [this.arr[i], this.arr[temp]]
            i = temp
        }
    }
}