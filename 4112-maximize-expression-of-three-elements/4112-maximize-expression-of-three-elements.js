/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function (nums) {
    let sorted=nums.sort((a,b)=>b-a)
    return sorted[0] + sorted[1] - sorted[sorted.length-1]
};