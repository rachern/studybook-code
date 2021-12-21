/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var buddyStrings = function(s, goal) {
    // 如果字符串长度不相等，不是亲密字符串
    if (s.length !== goal.length) return false
    if (s === goal) {
        // 字符串长度相等时，如果不含有至少两个相同的字母，不是亲密字符串
        if ([...new Set(s.split(''))].length < goal.length) return true
        return false
    }
    let i = 0, j = 0
    const s1 = s.split(''), goal1 = goal.split('')
    // 比较相同位置的字母，记录第1个不相同的位置
    while (s1[i] === goal1[i]) {
        i++
    }
    j = i + 1
    // 比较相同位置的字母，记录第2个不相同的位置
    while (j < s1.length && s1[j] === goal1[j]) {
        j++
    }
    // 如果没找到第2个不相同的字母，不是亲密字符串
    if (j === s1.length) return false
    // 如果两个不相同的字母无法交换，不是亲密字符串
    if (s1[i] !== goal1[j] || s1[j] !== goal1[i]) return false
    j = j + 1
    // 继续比较剩下的字母，如果出现不同字母的位置，则不是亲密字符串
    while (j < s1.length && s1[j] === goal1[j]) {
        j++
    }
    return j === s1.length
};