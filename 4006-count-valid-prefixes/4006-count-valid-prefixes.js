/**
 * @param {string} s
 * @return {number}
 */
var countValidPrefixes = function (s) {
    let z = 0
    let o = 0
    let res = 0
    for (let i of s) {
        if (i === '0') {
            z++
        } else {
            o++
        }
        if (Math.abs(z - o) <= 1) {
            res++
        }
    }
    return res
};