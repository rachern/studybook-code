/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var removeCoveredIntervals = function(intervals) {
    intervals.sort((a, b) => {
        if(a[0] !== b[0]) return a[0] - b[0]
        return b[1] - a[1]
    })
    let n = -1, sum = 0
    for(const item of intervals) {
        if(item[1] > n) {
            sum++
            n = item[1]
        }
    }
    return sum
};