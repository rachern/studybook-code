/**
 * @param {number[]} nums
 * @return {number[]}
 */

 const temp = []

 var countSmaller = function(nums) {
     const arr = []
     for(let i = 0; i < nums.length; i++) arr.push([nums[i], i, 0])
     mergeSort(arr, 0, nums.length - 1)
     const ret = []
     for(let i = 0; i < arr.length; i++) ret[arr[i][1]] = arr[i][2]
     return ret
 };
 
 var mergeSort = function(arr, l, r) {
     if (r <= l) return
     const mid = Math.floor((l + r) / 2)
     mergeSort(arr, l, mid)
     mergeSort(arr, mid + 1, r)
     let k = l, p1 = l, p2 = mid + 1
     while(p1 <= mid || p2 <= r) {
         if((p2 > r) || (p1 <= mid && arr[p1][0] > arr[p2][0])) {
             arr[p1][2] += (r - p2 + 1)
             temp[k++] = arr[p1++]
         } else {
             temp[k++] = arr[p2++]
         }
     }
     for(let i = l; i <= r; i++) arr[i] = temp[i]
 }