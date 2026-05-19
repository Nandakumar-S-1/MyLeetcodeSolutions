/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let set=new Set(nums1)
    for(let i of nums2){
        if(set.has(i)){
            return i
        }
    }
    return -1
};