/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    let freq = {}
    let res = 0
    for (let i of nums) {
        freq[i] = (freq[i] || 0) + 1
    }
    let maxFreq = Math.max(...Object.values(freq))
    for (let val of Object.values(freq)) {
        if (val === maxFreq) {
            res += val
        }
    }
    return res
};