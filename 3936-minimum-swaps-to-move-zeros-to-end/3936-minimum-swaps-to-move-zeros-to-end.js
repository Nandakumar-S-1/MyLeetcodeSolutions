/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSwaps = function (nums) {
    let count = 0
    let z = 0
    for (let i of nums) {
        if (i === 0) {
            z++
        }
    }
    let len = nums.length - z
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            count++
        }
    }
    return count
};