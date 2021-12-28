/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const sign = [1]
    let sum = 0, op = 1, n = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') continue
        if (s[i] - '0' >= 0 && s[i] - '0' <= 9) {
            n = n * 10 + s[i] * 1
            continue
        }
        sum += op * n
        n = 0

        if (s[i] === '-') op = -sign[sign.length - 1]
        if (s[i] === '+') op = sign[sign.length - 1]
        if (s[i] === '(') sign.push(op)
        if (s[i] === ')') sign.pop()
    }
    sum += op * n
    return sum
};

/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
    // 定义数字栈，符号栈用于保存数字和符号
    const nums = [], opts = []
    // 定义sum用于保存阶段性的和，定义n用于将每个参与计算的数从string转为number，定义sign表示符号位
    let sum = 0, n = 0, sign = 1
    for (let i = 0; i < s.length; i++) {
        // 跳过s中的' '
        if (s[i] === ' ') continue
        // 遇到数字时，将string类型的数字转成number
        if (s[i] - '0' >= 0 && s[i] - '0' <= 9) {
            n = n * 10 + s[i] * 1
            while (s[i + 1] !== ' ' && s[i + 1] - '0' >= 0 && s[i + 1] - '0' <= 9) {
                i++
                n = n * 10 + s[i] * 1
            }
            // 将该值进行计算
            sum += sign * n
            n = 0
        }
        // 遇到'+' 或 '-'，修改 sign 符号位
        if (s[i] === '+' || s[i] === '-') sign = s[i] === '+' ? 1 : -1
        // 如果遇到 '('，说明接下来要计算括号中的内容，将括号外的内容先存起来
        if (s[i] === '(') {
            nums.push(sum)
            sum = 0
            opts.push(sign)
            sign = 1
        }
        // 如果遇到 ')'，说明括号中的内容计算完毕，将前面保存的值弹出计算
        if (s[i] === ')') {
            sum = nums.pop() + opts.pop() * sum
        }
    }
    return sum
};