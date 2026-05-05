/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums.length===1)return 1
    let max=0
    let count=1
    for(let i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1]){
            count++
            console.log(count,nums[i-1],nums[i])
            if(nums[i]===nums[nums.length-1])max=Math.max(max,count)
        }else{
            max=Math.max(max,count)
            count=1
        }
    }
    return max
};