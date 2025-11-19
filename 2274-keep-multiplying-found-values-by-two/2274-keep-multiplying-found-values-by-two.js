/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let i=0
    while(i<nums.length){
        if(nums[i]===original){
            i=0
            original*=2
        }else {
            i++
        }
    }
    return original
};