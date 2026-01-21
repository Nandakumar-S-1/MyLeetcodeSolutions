/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let max = Math.max(...nums);
    let maxIndex = nums.indexOf(max);
    for (let i = 0; i < nums.length; i++) {
        if (i !== maxIndex && nums[i] * 2 > max) {
            return -1;
        }
    }
    return maxIndex;
};