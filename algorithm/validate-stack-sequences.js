/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
    const stack = []
    for (let i = 0; i < pushed.length; i++) {
        stack.push(pushed[i])
        while (popped.length && popped[0] === stack[stack.length - 1]) {
            popped.shift()
            stack.pop()
        }
    }
    return !stack.length
};