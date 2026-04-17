/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
    let total = 0
    for (let num of nums) {
        total += num
    }
    return total % 2 !== 0 ? 0 : nums.length - 1
};