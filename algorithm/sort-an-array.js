/**
 * @desc 解法一
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    return nums.sort((a, b) => a - b)
};


/**
 * @desc 解法二
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    quickSort(nums, 0, nums.length - 1)
    return nums
};

var quickSort = function (nums, l, r) {
    while (l < r) {
        let i = l, j = r, mid = nums[i]
        while (i < j) {
            while (i < j && nums[j] >= mid) j--
            if (i < j) nums[i++] = nums[j]
            while (i < j && nums[i] < mid) i++
            if (i < j) nums[j--] = nums[i]
        }
        nums[i] = mid
        quickSort(nums, i + 1, r)
        r = i - 1
    }
}


/**
 * @desc 解法三
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    quickSort(nums, 0, nums.length - 1)
    return nums
};

var quickSort = function (nums, l, r) {
    while (l < r) {
        let i = l, j = r, mid = nums[l]
        do {
            while (nums[i] < mid) i++
            while (nums[j] > mid) j--
            if (i <= j) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
                i++
                j--
            }
        } while (i <= j)
        quickSort(nums, i, r)
        r = j
    }
}