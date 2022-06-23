/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    const ret = []
    const temp = []
    for(const arr of intervals) {
        temp.push([arr[0], 1])
        temp.push([arr[1], -1])
    }
    temp.sort((a, b) => {
        if(a[0] !== b[0]) return a[0] - b[0]
        return b[1] - a[1]
    })
    let s = 0, k = -1
    for(let i = 0; i < temp.length; i++) {
        if(k === -1) k = temp[i][0]
        s += temp[i][1]
        if(s === 0) {
            ret.push([k, temp[i][0]])
            k = -1
        }
    }
    return ret
};