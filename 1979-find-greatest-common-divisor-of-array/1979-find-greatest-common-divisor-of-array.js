/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let max = Math.max(...nums)
    let min = Math.min(...nums)
    while (min !== 0) {
        let temp = min
        min = max % min
        max = temp
    }
    return max
};