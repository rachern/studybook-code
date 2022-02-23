/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findRedundantDirectedConnection = function(edges) {
    const unionSet = new UnionSet(edges.length + 1)
    const father = []
    for (let i = 1; i <= edges.length; i++) {
        father[i] = i
    }

    let conflict = -1
    let cycle = -1
    for (let i = 0; i < edges.length; i++) {
        const node1 = edges[i][0], node2 = edges[i][1]
        if (father[node2] !== node2) {
            conflict = i
        } else {
            father[node2] = node1
            if (unionSet.get(node1) === unionSet.get(node2)) {
                cycle = i
            } else {
                unionSet.merge(node1, node2)
            }
        }
    }
    console.log(conflict, cycle)
    if (conflict === -1) {
        return edges[cycle]
    } else {
        if (cycle > -1) {
            return [father[edges[conflict][1]], edges[conflict][1]]
        } else {
            return edges[conflict]
        }
    }
};

class UnionSet{
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