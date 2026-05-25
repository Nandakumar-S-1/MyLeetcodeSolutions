/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
    let sorted = nums.slice().sort((a, b) => b - a).slice(0, k)
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (sorted.includes(nums[i])) {
            res.push(nums[i])
            sorted.splice(sorted.indexOf(nums[i]), 1)
        }
    }
    return res
};
