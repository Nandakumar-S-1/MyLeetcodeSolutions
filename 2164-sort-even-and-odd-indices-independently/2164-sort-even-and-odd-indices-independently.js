/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
    let odd = [], even = [];
    for (let i = 0; i < nums.length; i++) {
        (i % 2 === 0 ? even : odd).push(nums[i]);
    }
    odd.sort((a, b) => b - a);
    even.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        res.push(i % 2 === 0 ? even.shift() : odd.shift());
    }
    return res
};