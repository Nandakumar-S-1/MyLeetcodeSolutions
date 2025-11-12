/**
 * @param {number[]} nums
 * @return {number}
 */
var evenNumberBitwiseORs = function (nums) {
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i]
        if (val % 2 === 0) {
            res = res | val
        }
    }
    return res
};