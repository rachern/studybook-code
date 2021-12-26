/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
    const arr = []
    let sign = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ')') {
            if (s[i] === '(') sign++
            arr.push(s[i])
        } else if (sign > 0) {
            sign--
            arr.push(s[i])
        }
    }
    if (!sign) return arr.join('')
    for (let i = 0; i < sign; i++) {
        arr.splice(arr.lastIndexOf('('), 1)
    }
    return arr.join('')
};