/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
    let s = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 9) {
            let sum = 0
            let v = nums[i]
            while (v > 0) {
                sum += v % 10
                v = Math.floor(v / 10)
            }
            if (i === sum) {
                return i
            }
        } else {
            if (i === nums[i]) {
                return i
            }
        }
    }
    return -1
};