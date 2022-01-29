/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
 var nthSuperUglyNumber = function(n, primes) {
    const ans = [1]
    const p = new Array(primes.length).fill(0)
    while (--n) {
        let min = Number.MAX_SAFE_INTEGER
        for (let i = 0; i < primes.length; i++) {
            min = Math.min(min, primes[i] * ans[p[i]])
        }
        ans.push(min)
        for (let i = 0; i < primes.length; i++) {
            if (primes[i] * ans[p[i]] === min) p[i]++
        }
    }
    return ans[ans.length - 1]
};