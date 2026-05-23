/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let set=[...new Set(nums)]

    for(let i=0;i<=set.length;i++){
      nums[i]=set[i];
    }
    return set.length;
};
