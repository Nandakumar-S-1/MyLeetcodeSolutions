/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let visited=new Set(nums)
    let n=nums.length;
    let res=[]
    for(let i=1;i<=n;i++){
        if(!visited.has(i)){
            res.push(i)
        }
    }
    return res
};