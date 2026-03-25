/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let freq={}
    let res=[]
    for(let i of nums1){
        freq[i]=(freq[i]||0)+1
    }

    for(let i of nums2){
        if(freq[i]>0){
            res.push(i)
            freq[i]--
        }
    }
    return res
};