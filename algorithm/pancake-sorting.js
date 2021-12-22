/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var pancakeSort = function(arr) {
    const ret = []
    while (arr.length) {
        let max = getMax(arr)
        if (max !== arr.length - 1) {
            if (max !== 0) {
                ret.push(max + 1)
                reverse(arr, max)
            }
            ret.push(arr.length)
            reverse(arr, arr.length - 1)
        }
        arr.pop()
    }
    return ret
};

var getMax = function (arr) {
    let s = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[s]) s = i
    }
    return s
}

var reverse = function (arr, k) {
    let i = 0
    while (i < k) {
        [arr[i], arr[k]] = [arr[k], arr[i]]
        i++
        k--
    }
}