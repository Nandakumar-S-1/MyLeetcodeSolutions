/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map()
    let dif=0
    for(let i=0;i<nums.length;i++){
        let val=nums[i]
        if(map.has(val)){
            dif=Math.abs(i-map.get(val))
            if(dif<=k){
                return true
            }
        }
        map.set(val,i)
    }
    return false
};