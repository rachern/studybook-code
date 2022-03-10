/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var smallestK = function(arr, k) {
    if (k === 0) return []
    quick_select(arr, 0, arr.length - 1, k)
    return arr.slice(0, k)
};

var quick_select = function(arr, l, r, k) {
    if (l >= r) return
    let x = l, y = r, mid = getMid(arr[l], arr[r], arr[(l + r) / 2])
    do {
        while(arr[x] < mid) x++
        while(arr[y] > mid) y--
        if (x <= y) {
            [arr[x], arr[y]] = [arr[y], arr[x]]
            x++
            y--
        }
    } while(x <= y)
    if (y - l === k - 1) return
    else if (y - l > k - 1) quick_select(arr, l, y, k)
    else quick_select(arr, x, r, k - x + l)
}

var getMid = function(a, b, c) {
    if (a > b) [a, b] = [b, a]
    if (a > c) [a, c] = [c, a]
    if (b > c) [b, c] = [c, b]
    return b
}