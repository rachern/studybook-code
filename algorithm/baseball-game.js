/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
    const stack = []
    for (let i = 0; i < ops.length; i++) {
        switch (ops[i]) {
            case 'C':
                stack.pop()
                break
            case 'D':
                stack.push(stack[stack.length - 1] * 2)
                break
            case '+':
                stack.push(Number(stack[stack.length - 1]) + Number(stack[stack.length - 2]))
                break
            default:
                stack.push(Number(ops[i]))
        } 
    }
    const sum = stack.reduce((sum, val) => {
        return sum + val
    })
    return sum
};