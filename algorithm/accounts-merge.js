/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
 var accountsMerge = function(accounts) {
    const emailIndexMap = new Map()
    const emailNameMap = new Map()
    let index = 0
    for (const account of accounts) {
        const [name, ...accts] = account
        for (const acct of accts) {
            if (!emailIndexMap.has(acct)) {
                emailIndexMap.set(acct, index++)
                emailNameMap.set(acct, name)
            } 
        }
    }

    const unionSet = new UnionSet(emailIndexMap.size)
    for (const account of accounts) {
        const [name, ...accts] = account
        for (let i = 1; i < accts.length; i++) {
            unionSet.merge(emailIndexMap.get(accts[i - 1]), emailIndexMap.get(accts[i]))
        }
    }

    const accountIndexMap = new Map()
    for (const [email, index] of emailIndexMap) {
        const rootIndex = unionSet.get(index)
        if (!accountIndexMap.has(rootIndex)) accountIndexMap.set(rootIndex, [])
        accountIndexMap.get(rootIndex).push(email)
    }

    const res = []
    for (const arr of accountIndexMap.values()) {
        arr.sort()
        arr.unshift(emailNameMap.get(arr[0]))
        res.push(arr)
    }

    return res
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