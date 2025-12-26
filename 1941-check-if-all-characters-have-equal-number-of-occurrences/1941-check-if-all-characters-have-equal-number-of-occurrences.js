/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let freq={}
    for(let char of s){
        freq[char]=(freq[char]||0)+1
    }
    let count=Object.values(freq)
    let val = count[0]
    for(let i of count){
        if(val!==i){
            return false
        }
    }
    return true
};