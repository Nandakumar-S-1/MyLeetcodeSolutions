/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let count = 0
    let total = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count++
            if (total < count) {
                total = count
            }
        } else {
            count = 0
        }
    }
    return total
};