/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    const ans = []
    const queue = []
    let i = 0
    while (i < nums.length) {
        while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
            queue.pop()
        }
        queue.push(i)
        if (queue.length && queue[0] + k <= i) {
            queue.shift()
        }
        i++
        if (i >= k) ans.push(nums[queue[0]])
    }
    return ans
};