/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function (nums, target) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        let ic = 0
        for (let j = i; j < nums.length; j++) {
            if (nums[j] === target) {
                ic++
            }
            let len = j - i + 1
            if (ic > len / 2) {
                count++
            }
        }
    }
    return count
};