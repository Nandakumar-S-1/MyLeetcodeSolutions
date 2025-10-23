/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
    while (s.length > 2) {
        let res = ""
        for (let i = 0; i < s.length - 1; i++) {
            let sum = (parseInt(s[i]) + parseInt(s[i + 1])) % 10
            res+=sum.toString()
        }
        s = res
    }
    return s[0] === s[1]
};