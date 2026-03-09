/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    if (nums.length < 2) return true
    let c = []
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] <= nums[i + 1]) {
            continue
        } else {
            if (nums[i - 1] && nums[i - 1] > nums[i + 1] && nums[i] > nums[i + 2]) {
                return false
            }
        }
        c.push(i)
    }
    return c.length <= 1
};