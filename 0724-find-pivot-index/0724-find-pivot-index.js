/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let left = 0
    let right = 0

    nums.forEach((num) => {
        right += num
    })

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        right -= curr

        if (left === right) {
            return i
        }
        left += curr
    }
    return -1
};