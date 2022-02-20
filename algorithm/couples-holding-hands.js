/**
 * @param {number[]} row
 * @return {number}
 */
 var minSwapsCouples = function(row) {
    const n = row.length / 2
    const unionSet = new UnionSet(n)
    for (let i = 0; i < row.length; i += 2) {
        unionSet.merge(Math.floor(row[i] / 2), Math.floor(row[i + 1] / 2))
    }

    return n - unionSet.getCount()
};

class UnionSet {
    constructor(n) {
        this.fa = []
        this.size = []
        this.count = n
        for (let i = 0; i < n; i++) {
            this.fa[i] = i
            this.size[i] = 1
        }
    }

    get(v) {
        if (this.fa[v] === v) return v
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
        this.count--
    }

    getCount() {
        return this.count
    }
}