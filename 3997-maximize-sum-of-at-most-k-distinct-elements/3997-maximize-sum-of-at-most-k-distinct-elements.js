/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function (nums, k) {
    return [...new Set(nums)].sort((a, b) => b - a).slice(0, k)
};