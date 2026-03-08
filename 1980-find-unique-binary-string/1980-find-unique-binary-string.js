/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let res=''
    for(let i=0;i<nums.length;i++){
        if(nums[i][i]=='0')res+='1'
        else res+='0'
    }
    return res
};