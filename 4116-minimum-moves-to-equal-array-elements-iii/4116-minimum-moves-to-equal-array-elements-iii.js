/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let diff=0
    let max=Math.max(...nums)
    for(let i=0;i<nums.length;i++){
        diff+=(max-nums[i])
    }
    return diff
}