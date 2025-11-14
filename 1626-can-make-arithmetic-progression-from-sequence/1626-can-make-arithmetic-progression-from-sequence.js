/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    let sorted=arr.sort((a,b)=>a-b)
    let diff=sorted[1]-sorted[0]
    console.log(diff,sorted)
    for(let i=1;i<sorted.length;i++){
        if(diff!==sorted[i]-sorted[i-1]){
            return false
        }
    }
    return true
};