/**
 * @desc 直接排序
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    let max = 0, sum = 0
    nums = [...new Set(nums)]
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        sum++
        if (nums[i + 1] === undefined || nums[i + 1] - nums[i] !== 1) {
            max = Math.max(max, sum)
            sum = 0
        }
    }
    return max
};

/**
 * @desc 哈希表
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    if (!nums.length) return 0
    const map = new Map()
    for (const num of nums) {
        if (map.has(num)) continue
        const left = map.get(num - 1) || 0
        const right = map.get(num + 1) || 0
        const len = left + right + 1
        map.set(num, len)
        map.set(num - left, len)
        map.set(num + right, len)
    }
    return Math.max(...map.values())
};

/**
 * @desc 集合
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    const set = new Set(nums)
    let max = 0
    for (const num of set) {
        if (!set.has(num - 1)) {
            currentLen = 1
            currentNum = num
            
            while (set.has(currentNum + 1)) {
                currentLen++
                currentNum++
            }

            max = Math.max(max, currentLen)
        }
    }
    return max
};

/**
 * @desc 并查集
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    if (!nums.length) return 0
    const unionSet = new UnionSet(nums.length)
    const map = new Map
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) continue
        map.set(nums[i], i)
        map.has(nums[i] - 1) && unionSet.merge(i, map.get(nums[i] - 1))
        map.has(nums[i] + 1) && unionSet.merge(i, map.get(nums[i] + 1))
    }
    return Math.max(...unionSet.size)
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