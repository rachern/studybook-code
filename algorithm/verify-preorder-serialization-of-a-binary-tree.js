/**
 * @desc 消#法
 * @param {string} preorder
 * @return {boolean}
 */
 var isValidSerialization = function(preorder) {
    const s = preorder.split(',')
    const stack = []
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i])
        while (stack.length >= 3 && stack[stack.length - 1] === '#' && stack[stack.length - 2] === '#' && stack[stack.length - 3] !== '#') {
            stack.pop()
            stack.pop()
            stack.pop()
            stack.push('#')
        }
    }
    return stack.length === 1 && stack[0] === '#'
};


/**
 * @desc 出度入度计数法
 * @param {string} preorder
 * @return {boolean}
 */
 var isValidSerialization = function(preorder) {
    const s = preorder.split(',')
    let sign = 0
    for (let i = 0; i < s.length; i++) {
        if (sign <= -1) return false
        s[i] === '#' ? sign-- : sign++
    }
    return sign === -1
};