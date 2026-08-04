/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let map = {}
    let arr = (s1 + ' ' + s2).split(' ')
    for (let i of arr) {
        map[i] = (map[i] || 0) + 1
    }
    let res = []
    for (let i in map) {
        if (map[i] === 1) {
            res.push(i)
        }
    }
    return res
};