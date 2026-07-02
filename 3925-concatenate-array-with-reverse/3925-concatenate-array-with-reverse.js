/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function (nums) {
    let n = nums.length
    for (let i = n - 1; i >= 0; i--) {
        nums.push(nums[i])
    }
    return nums
};