/**
 * @param {number[]} nums
 * @return {number}
 */
 const temp = []

 var maxSubArray = function(nums) {
     let ans = Number.MIN_SAFE_INTEGER
 
     const mergeSort = (arr, l, r) => {
         if (r <= l) return
         const mid = Math.floor((l + r) / 2)
         mergeSort(arr, l, mid)
         mergeSort(arr, mid + 1, r)
         ans = Math.max(ans, arr[r] - arr[l])
 
         let k = l, p1 = l, p2 = mid + 1
         while(p1 <= mid || p2 <= r) {
             if(p2 > r || p1 <= mid && arr[p1] < arr[p2]) {
                 temp[k++] = arr[p1++]
             } else {
                 temp[k++] = arr[p2++]
             }
         }
         for(let i = l; i <= r; i++) arr[i] = temp[i]
     }
 
     const sums = [0]
     for(let i = 0; i < nums.length; i++) sums[i + 1] = sums[i] + nums[i]
 
     mergeSort(sums, 0, sums.length - 1)
     return ans
 };