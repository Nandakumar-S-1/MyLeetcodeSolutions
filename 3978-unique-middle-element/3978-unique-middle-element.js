/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMiddleElementUnique = function(nums) {
    let count=0
    let i=0
    let mid=Math.floor(nums.length/2)
    while(i<nums.length){
        if(nums[i]===nums[mid]){
            count++
        }
        i++
    }
    return count===1
};