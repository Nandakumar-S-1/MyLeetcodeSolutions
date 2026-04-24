/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let res = ''
    for (let i = 0; i < s.length; i++) {
        helper(i, i)
        helper(i, i + 1)
    }

    function helper(l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            let str = s.substring(l, r + 1)
            if (res.length < str.length) {
                res = str
            }
            l--
            r++
        }
    }
    return res
};

