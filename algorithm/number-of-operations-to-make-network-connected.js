/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
 var makeConnected = function(n, connections) {
    if (connections.length < n - 1) return -1
    const unionSet = new UnionSet(n)
    for (const connection of connections) {
        unionSet.merge(connection[0], connection[1])
    }
    let num = 0
    for (let i = 0; i < n; i++) {
        if (unionSet.get(i) === i) num++
    }
    return num - 1
};

class UnionSet {
    constructor (n) {
        this.fa = []
        this.size = []
        for (let i = 0; i < n; i++) {
            this.fa[i] = i
            this.size[i] = 1
        }
    }

    get (v) {
        if (this.fa[v] === v) return v
        const root = this.get(this.fa[v])
        this.fa[v] = root
        return root
    }

    merge (a, b) {
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