/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    let a1=[nums[0]]
    let a2=[nums[1]]
    for(let i=2;i<nums.length;i++){
        if(a1[a1.length-1]>a2[a2.length-1]){
            a1.push(nums[i])
        }else{
            a2.push(nums[i])
        }
    }
    return [...a1,...a2]
};