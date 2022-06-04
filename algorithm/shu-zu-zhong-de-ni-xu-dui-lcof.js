/**
 * @desc 归并排序
 * @param {number[]} nums
 * @return {number}
 */
 var reversePairs = function(nums) {
    const temp = []
    return countResult(nums, temp, 0, nums.length - 1)

};

var countResult = function(nums, temp, l, r) {
    if (l >= r) return 0
    let ans = 0, mid = Math.floor((l + r) / 2)
    ans += countResult(nums, temp, l, mid)
    ans += countResult(nums, temp, mid + 1, r)
    let k = l, p1 = l, p2 = mid + 1 
    while (p1 <= mid || p2 <= r) {
        if (p2 > r || (p1 <= mid && nums[p1] <= nums[p2])) {
            temp[k++] = nums[p1++]
        } else {
            temp[k++] = nums[p2++]
            ans += (mid - p1 + 1)
        }
    }
    for(let i = l; i <= r; i++) nums[i] = temp[i]
    return ans
}