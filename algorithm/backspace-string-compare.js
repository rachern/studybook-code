/**
 * @desc 栈
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    const stackS = [], stackT = []
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '#': 
                stackS.pop()
                break
            default:
                stackS.push(s[i])
        }
    }
    for (let i = 0; i < t.length; i++) {
        switch (t[i]) {
            case '#': 
                stackT.pop()
                break
            default:
                stackT.push(t[i])
        }
    }
    return stackS.join('') === stackT.join('')
};

/**
 * @desc 标记法
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    let stackS = 0, stackT = 0, i = s.length - 1, j = t.length - 1
    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            if (s[i] === '#') {
                stackS++
                i--
            } else if (stackS) {
                stackS--
                i--
            } else {
                break
            }
        }
        while (j >= 0) {
            if (t[j] === '#') {
                stackT++
                j--
            } else if (stackT) {
                stackT--
                j--
            } else {
                break
            }
        }
        if (s[i] !== t[j]) return false
        i--
        j--
    } 
    return true
};