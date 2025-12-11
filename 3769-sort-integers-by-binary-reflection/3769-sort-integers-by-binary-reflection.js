/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortByReflection = function(nums) {
    let map=new Map()
    for(let i=0;i<nums.length;i++){
        let val=nums[i].toString(2).split('').reverse()
        while(val[val.length-1]=='0' ){
            val.pop()
        }
        let rev=parseInt(val.join(''),2)
        map.set(nums[i],rev)
    }
    nums.sort((a,b)=>{
       let v1=map.get(a)
        let v2=map.get(b)
        if(v1!==v2) return v1-v2
        return a-b
    })
    return nums
};