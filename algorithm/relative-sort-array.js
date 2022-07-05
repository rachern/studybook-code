/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
    const arr = new Array(1001).fill(0)
    for(let i = 0; i < arr1.length; i++) arr[arr1[i]]++
    const ret = []
    for(let i = 0; i < arr2.length; i++) {
        while(arr[arr2[i]]--) ret.push(arr2[i])
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            while(arr[i]--) ret.push(i)
        }
    }
    return ret
};