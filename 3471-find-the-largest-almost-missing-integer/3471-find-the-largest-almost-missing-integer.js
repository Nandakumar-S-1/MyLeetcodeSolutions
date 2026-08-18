/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function (nums, k) {
    let map = new Map();
    let n = nums.length;

    if (n === k) {
        return Math.max(...nums);
    }
    for (let i = 0; i <= n - k; i++) {
        for (let j = 0; j < k; j++) {
            let num = nums[i + j];
            map.set(num, (map.get(num) || 0) + 1);
        }
    }
    let res = -1;
    for (let [num, count] of map.entries()) {
        if (count === 1) {
            res = Math.max(res, num);
        }
    }
    return res;
}; 