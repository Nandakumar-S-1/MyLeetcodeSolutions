/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    if (nums.length < 2) {
        return nums
    }
    let mid = Math.floor(nums.length / 2)
    let left = nums.slice(0, mid)
    let right = nums.slice(mid)
    return Sort(sortArray(left), sortArray(right))
};
function Sort(left, right) {
    let sorted = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    }
    return [...sorted, ...left, ...right]
};