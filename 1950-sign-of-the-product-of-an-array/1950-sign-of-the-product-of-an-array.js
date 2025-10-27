/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
   let pr=1
   for(let i=0;i<nums.length;i++){
        if(nums[i]===0)return 0
        else pr*=nums[i]
   }
   return pr>0 ? 1 : -1
};