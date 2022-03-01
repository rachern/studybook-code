/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
 var rand10 = function() {
    while(true) {
        let num = (rand7()-1) * 7 + rand7()
        if (num <= 40) return 1 + num % 10

        num = (num - 40 - 1) * 7 + rand7()
        if (num <= 60) return 1 + num % 10
        
        num = (num - 60 - 1) * 7 + rand7()
        if (num <= 20) return 1 + num % 10
    }
};

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
 var rand10 = function() {
    let p = rand7(), q = rand7()
    // p 实现 rand5
    while (p > 5) p = rand7()
    while (q === 7) q = rand7()
    // q 大于 3 的概率是 1/2，可以看成 rand2
    return q > 3 ? p : p + 5
};