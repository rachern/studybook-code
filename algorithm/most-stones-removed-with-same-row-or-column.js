/**
 * @param {number[][]} stones
 * @return {number}
 */
 var removeStones = function(stones) {
    const unionSet = new UnionSet(stones.length)
    for (let i = 0; i < stones.length - 1; i++) {
        for (let j = i + 1; j < stones.length; j++) {
            if (stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) unionSet.merge(i, j)
        }
    }

    let sum = 0
    for (let i = 0; i < stones.length; i++) {
        if (unionSet.get(i) === i) sum++
    }

    return stones.length - sum
};

class UnionSet {
    constructor(n) {
        this.fa = []
        this.size = []
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
    }
}