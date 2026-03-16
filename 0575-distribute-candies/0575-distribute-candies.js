/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(c) {
    let freq={}
    let co=0
    for(let i of c){
        if(!freq[i]){
            co++
        }
        freq[i]=(freq[i]||0)+1
    }
    for(let i in freq){

    }
    return Math.min(co,c.length/2)
};