/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
    for (let i = 2; i <= n - 2; i++) {
        let val = n.toString(i)
        let rev = val.split('').reverse().join('')
        if (val !== rev) return false
    }
    return true
};