/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
    if (a > b) [a, b] = [b, a]
    if (a > c) [a, c] = [c, a]
    if (b > c) [b, c] = [c, b]
    let grade = 0
    let num1 = c - b
    if (num1 > a) {
        grade = grade + a + b
    } else {
        grade += num1
        let num2 = a - num1
        if (num2 % 2 === 1) num2 -= 1
        grade = grade + num2
        grade = grade + (b - num2 / 2)
    }
    return grade
};

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
    if (a > b) [a, b] = [b, a]
    if (a > c) [a, c] = [c, a]
    if (b > c) [b, c] = [c, b]
    let grade = 0
    if (a + b <= c) {
        grade += a + b
    } else {
        let num = (a + b) - c
        if (num % 2 === 1) num -= 1
        grade += c
        grade += num / 2
    }
    return grade
};