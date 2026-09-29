/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let res = [];

    while (nums.length) {
        let set = [...new Set(nums)].sort((a, b) => a - b);
        res.push(...set);
        for (let num of set) {
            nums.splice(nums.indexOf(num), 1);
        }
    }
    return res;
};