/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let red = 0, blue = nums.length - 1, i = 0
    while (i <= blue) {
        switch(nums[i]){
            case 0:
                [nums[red], nums[i]] = [nums[i], nums[red]]
                i++
                red++
                break;
            case 1:
                i++
                break;
            case 2:
                [nums[blue], nums[i]] = [nums[i], nums[blue]]
                blue--
                break;
            default:
                break;
        }
    }
};