/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    let res = []
    for (let i = min; i <= max; i++) {
        if (!nums.includes(i)) {
            res.push(i)
        }
    }
    return res
};