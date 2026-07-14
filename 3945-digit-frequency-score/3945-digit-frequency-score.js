/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function (n) {
    let res = 0
    let freq = {}
    let str = String(n)
    for (let i of str) {
        freq[i] = (freq[i] || 0) + 1
    }
    for (let i in freq) {
        res += Number(i) * freq[i]
    }
    return res
};