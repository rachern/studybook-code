/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumGap = function(nums) {
    const n = nums.length
    if (n < 2) return 0

    let exp = 1
    const maxVal = Math.max(...nums)
    const buf = new Array(n)
    
    while(maxVal >= exp) {
        const cnt = new Array(10).fill(0)
        for(let i = 0; i < n; i++) {
            const digest = Math.floor(nums[i] / exp) % 10
            cnt[digest]++
        }
        for(let i = 1; i <= 9; i++) {
            cnt[i] += cnt[i - 1]
        }
        for(let i = n - 1; i >= 0; i--) {
            const digest = Math.floor(nums[i] / exp) % 10
            buf[cnt[digest] - 1] = nums[i]
            cnt[digest]--
        }
        nums = buf.slice(0)
        exp *= 10
    }

    let max = 0
    for(let i = 1; i < n; i++) {
        max = Math.max(max, nums[i] - nums[i - 1])
    }
    return max
};