/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function(s) {
    const stack = [] 
    let sign = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' && sign++ > 0) {
            stack.push('(')
        }
        if (s[i] === ')' && sign-- > 1) {
            stack.push(')')
        }
    }
    return stack.join('')
};