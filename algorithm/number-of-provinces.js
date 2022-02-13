/**
 * @desc Quick-Find
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function(isConnected) {
    const len = isConnected.length
    const unionSet = new UnionSet(len)
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (isConnected[i][j] === 1) unionSet.merge(i, j)
        }
    }
    let sum = 0
    for (let i = 0; i < len; i++) {
        if (unionSet.find(i) === i) sum++
    }
    return sum
};

class UnionSet {
    constructor(n) {
        this.color = []
        for (let i = 0; i < n; i++) {
            this.color[i] = i
        }
    }

    find(i) {
        return this.color[i]
    }

    merge(a, b) {
        let ca = this.find(a), cb = this.find(b)
        if (ca === cb) return
        for (let i = 0; i < this.color.length; i++) {
            if (this.find(i) === ca) this.color[i] = cb
        }
    }
}

/**
 * @desc Quick-Union
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function(isConnected) {
    const len = isConnected.length
    const unionSet = new UnionSet(len)
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (isConnected[i][j] === 1) unionSet.merge(i, j)
        }
    }
    let sum = 0
    console.log(unionSet.fa)
    for (let i = 0; i < len; i++) {
        if (unionSet.find(i) === i) sum++
    }
    return sum
};

class UnionSet {
    constructor(n) {
        this.fa = []
        for (let i = 0; i < n; i++) {
            this.fa[i] = i
        }
    }

    find(i) {
        if (this.fa[i] === i) return i
        return this.find(this.fa[i])
    }

    merge(a, b) {
        const fa = this.find(a), fb = this.find(b)
        if (fa === fb) return
        this.fa[fb] = fa
    }
}

/**
 * @desc Weighted-Quick-Union
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function(isConnected) {
    const len = isConnected.length
    const unionSet = new UnionSet(len)
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (isConnected[i][j] === 1) unionSet.merge(i, j)
        }
    }
    let sum = 0
    for (let i = 0; i < len; i++) {
        if (unionSet.find(i) === i) sum++
    }
    return sum
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

    find(i) {
        if (this.fa[i] === i) return i
        return this.find(this.fa[i])
    }

    merge(a, b) {
        const fa = this.find(a), fb = this.find(b)
        if (fa === fb) return
        if (this.size[a] < this.size[b]) {
            this.fa[fa] = fb
            this.size[fb] += this.size[fa]
        } else {
            this.fa[fb] = fa
            this.size[fa] += this.size[fb]
        }
    }
}

/**
 * @desc Weighted-Quick-Union-Path-Compress
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function(isConnected) {
    const len = isConnected.length
    const unionSet = new UnionSet(len)
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (isConnected[i][j] === 1) unionSet.merge(i, j)
        }
    }
    let sum = 0
    for (let i = 0; i < len; i++) {
        if (unionSet.find(i) === i) sum++
    }
    return sum
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

    find(i) {
        if (this.fa[i] === i) return i
        const root = this.find(this.fa[i])
        this.fa[i] = root
        return root
    }

    merge(a, b) {
        const fa = this.find(a), fb = this.find(b)
        if (fa === fb) return
        if (this.size[a] < this.size[b]) {
            this.fa[fa] = fb
            this.size[fb] += this.size[fa]
        } else {
            this.fa[fb] = fa
            this.size[fa] += this.size[fb]
        }
    }
}