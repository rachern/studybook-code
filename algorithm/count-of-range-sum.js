/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
 const temp = []

 var countRangeSum = function(nums, lower, upper) {
     const sum = [0]
     for(let i = 0; i < nums.length; i++) {
         sum[i + 1] = sum[i] + nums[i]
     }
     return mergeSort(sum, 0, sum.length - 1, lower, upper)
 };
 
 var mergeSort = function(sum, l, r, lower, upper) {
     if(l >= r) return 0
     let mid = Math.floor((l + r) / 2), ans = 0
     ans += mergeSort(sum, l, mid, lower, upper)
     ans += mergeSort(sum, mid + 1, r, lower, upper)
     ans += countTwoPart(sum, l, mid, mid + 1, r, lower, upper)
     let k = l, p1 = l, p2 = mid + 1
     while(p1 <= mid || p2 <= r) {
         if ((p2 > r) || (p1 <= mid && sum[p1] <= sum[p2])) {
             temp[k++] = sum[p1++]
         } else {
             temp[k++] = sum[p2++]
         }
     }
     for (let i = l; i <= r; i++) sum[i] = temp[i]
     return ans
 }
 
 var countTwoPart = function(sum, l1, r1, l2, r2, lower, upper) {
     let ans = 0, k1 = l1, k2 = l1
     for (let j = l2; j <= r2; j++) {
         const a = sum[j] - upper
         const b = sum[j] - lower
         while(k1 <= r1 && sum[k1] < a) k1++
         while(k2 <= r1 && sum[k2] <= b) k2++
         ans += k2 - k1
     }
     return ans
 }