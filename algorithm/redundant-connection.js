/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findRedundantConnection = function(edges) {
    const unionSet = new UnionSet(edges.length)
    for (let i = 0; i < edges.length; i++) {
        if (unionSet.get(edges[i][0]) !== unionSet.get(edges[i][1])) {
            unionSet.merge(edges[i][0], edges[i][1])
        } else {
            return edges[i]
        }
    }
};

class UnionSet {
    constructor(n) {
        this.fa = []
        this.size = []
        for(let i = 0; i <= n; i++) {
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