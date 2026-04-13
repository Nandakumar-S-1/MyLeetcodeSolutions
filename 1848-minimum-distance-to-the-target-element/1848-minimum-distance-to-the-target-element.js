/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let i=0
    let min=Infinity
    while(i<nums.length){
        if(nums[i]===target){
            min=Math.min(Math.abs(i-start),min)
        }
        i++
    }
    return min
};