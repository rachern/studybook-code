/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var findSubsequences = function(nums) {
    const ret = []
    const temp = []
    _subQuences(nums, temp, 0, ret)
    return ret
};

var _subQuences = function(nums, temp, ind, ret) {
    if(temp.length >= 2) ret.push(temp)
    const map = new Map()
    for(let i = ind; i < nums.length; i++) {
        const _temp = temp.slice(0)
        if((!_temp.length || nums[i] >= _temp[_temp.length - 1]) && !map.has(nums[i])) {
            map.set(nums[i], 1)
            _temp.push(nums[i])
            _subQuences(nums, _temp, i + 1, ret)
        }
    }
}