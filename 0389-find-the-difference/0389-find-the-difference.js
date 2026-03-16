/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let freq1={}
    let freq2={}
    for(let i of s){
        freq1[i]=(freq1[i]||0)+1
    }
    for(let i of t){
        freq2[i]=(freq2[i]||0)+1
    }
    for(let i in freq2){
        if(freq1[i]!==freq2[i]){
            return i
        }
    }
};