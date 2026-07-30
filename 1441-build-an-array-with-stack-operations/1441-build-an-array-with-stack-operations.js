/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let res = []
    for (let i = 0, j = 1; j <= n && i < target.length; j++) {
        res.push("Push")
        if (target[i] === j) {
            i++
        } else {
            res.push('Pop')
        }
    }
    return res
};