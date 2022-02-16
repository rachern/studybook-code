/**
 * @param {string[]} equations
 * @return {boolean}
 */
 var equationsPossible = function(equations) {
    const unionSet = new UnionSet(26)
    for (let i = 0; i < equations.length; i++) {
        if (equations[i][1] === '!') continue
        const a = equations[i][0].charCodeAt() - 'a'.charCodeAt()
        const b = equations[i][3].charCodeAt() - 'a'.charCodeAt()
        unionSet.merge(a, b)
    }
    for (let i = 0; i < equations.length; i++) {
        if (equations[i][1] === '=') continue
        const a = equations[i][0].charCodeAt() - 'a'.charCodeAt()
        const b = equations[i][3].charCodeAt() - 'a'.charCodeAt()
        if (unionSet.find(a) === unionSet.find(b)) return false
    }
    return true
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

    find(v) {
        if (this.fa[v] === v) return v
        const root = this.find(this.fa[v])
        this.fa[v] = root
        return root
    }

    merge(a, b) {
        const ra = this.find(a), rb = this.find(b)
        if(ra === rb) return
        if (this.size[ra] < this.size[rb]) {
            this.fa[ra] = rb
            this.size[rb] += this.size[ra]
        } else {
            this.fa[rb] = ra
            this.size[ra] += this.size[rb]
        }
    }
}