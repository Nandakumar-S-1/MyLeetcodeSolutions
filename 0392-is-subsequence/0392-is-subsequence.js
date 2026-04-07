/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let posS = 0
    let posT = 0
    while (posT < t.length && posS < s.length) {
        if (s[posS] === t[posT]) {
            posS++
        }
        posT++
    }
    return s.length == posS
};