/**
 * @desc 解法一
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
    const odd = []
    const even = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            even.push(nums[i])
        } else {
            odd.push(nums[i])
        }
    }
    return odd.concat(even)
};

/**
 * @desc 解法二
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
    let i = 0, j = nums.length - 1
    while (i < j) {
        while (i < j && nums[i] % 2 === 1) i++
        while (i < j && nums[j] % 2 === 0) j--
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i++
        j--
    }
    return nums
};