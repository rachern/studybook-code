/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    const row = grid.length, col = grid[0].length
    const unionSet = new UnionSet(row * col)
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === '0') continue
            if (i > 0 && grid[i - 1][j] === '1') unionSet.merge(col*i+j, col*(i-1)+j)
            if (j > 0 && grid[i][j - 1] === '1') unionSet.merge(col*i+j, col*i+j-1)
        }
    }
    let sum = 0
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(grid[i][j] === '1' && unionSet.find(i*col+j) === i*col+j) sum++
        }
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

    find(v) {
        if(this.fa[v] === v) return v
        const root = this.find(this.fa[v])
        this.fa[v] = root
        return root
    }

    merge(a, b) {
        const sa = this.find(a), sb = this.find(b)
        if (sa === sb) return
        this.fa[sa] = sb
    }
}