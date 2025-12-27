/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i=0
    let obj={}
    while(i<nums.length){
        let r = target-nums[i]
        if(obj[r]!==undefined){
            return [obj[r],i]
        }
        obj[nums[i]]=i
        i++
    }
};