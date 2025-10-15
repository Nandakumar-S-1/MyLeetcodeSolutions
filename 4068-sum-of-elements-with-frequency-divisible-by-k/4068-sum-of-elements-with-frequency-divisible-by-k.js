/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function(nums, k) {
    let freq={}
    for(let i of nums){
        freq[i]=(freq[i]||0)+1
    }
    let sum=0
    for(let i in freq){
        // console.log(i,freq[i])
        if(freq[i]%k===0){
            sum+= Number(i)*freq[i]
        }
    }
// console.log(sum)
return sum
};