/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function (nums, k) {
    let set = new Set(nums)
    let res = []
    for (let i of set) {
        res.push(i)
    }
    return res.sort((a, b) => b - a).slice(0, k)
};