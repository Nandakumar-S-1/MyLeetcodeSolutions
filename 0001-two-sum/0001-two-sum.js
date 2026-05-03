/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {}
    let rem = 0
    for (let i = 0; i < nums.length; i++) {
        rem = target - nums[i]
        if (rem in map) {
            return [map[rem], i]
        } map[nums[i]] = i
    }
    return []
};