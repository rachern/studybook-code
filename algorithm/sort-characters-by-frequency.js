/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    const map = new Map()
    for(let i = 0; i < s.length; i++) {
        if(!map.has(s[i])) {
            map.set(s[i], 1)
        } else {
            map.set(s[i], map.get(s[i]) + 1)
        }
    }
    const arr = [...map.entries()]
    arr.sort((a, b) => b[1] - a[1])
    let ans = ''
    for(let i = 0; i < arr.length; i++) {
        while(arr[i][1]--) {
            ans += arr[i][0]
        }
    }
    return ans
};