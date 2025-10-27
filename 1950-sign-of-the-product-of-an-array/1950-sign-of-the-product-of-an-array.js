/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
   let pr=nums.reduce((acc,curr)=>{
    if(curr==0){
        return 0
    }
    return acc*curr
   },1)
   if(pr===0)return 0
   return pr>0 ? 1 : -1
};