/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
    let str = ''
    let i = 0
    while(s[i]) {
        if (s[i] < '0' || s[i] > '9') {
            str += s[i]
            i++
        } else {
            let num = 0
            while (s[i] >= '0' && s[i] <= '9') {
                num = num * 10 + +s[i++]
            }
            i++
            let l = i, r = i, cnt = 1
            while(cnt) {
                r += 1
                if (s[r] === '[') cnt++
                if (s[r] === ']') cnt--
            }
            let temp = decodeString(s.substr(l, r - l))
            while (num--) str += temp
            i = r + 1
        }
    }
    return str
};