/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    let freq={}
    for(let i of word1){
        freq[i]=(freq[i]||0)+1
    }
        for(let i of word2){
        freq[i]=(freq[i]||0)-1
    }
    for(let i in freq){
        if(Math.abs(freq[i])>3){
            return false
        }
    }
    return true
};