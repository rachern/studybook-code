/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var kthGrammar = function(n, k) {
    if (k === 1) return 0
    if (k <= Math.pow(2, n - 2)) {
        return kthGrammar(n-1, k)
    } else {
        return kthGrammar(n-1, k - Math.pow(2, n - 2)) === 0 ? 1 : 0
    }
};