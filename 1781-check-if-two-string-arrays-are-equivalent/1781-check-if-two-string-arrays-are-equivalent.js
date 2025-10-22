/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let one=''
    let two=''
    for(let i=0;i<word1.length;i++){
        one+=word1[i]
    }
    for(let i=0;i<word2.length;i++){
        two+=word2[i]
    }
    return one===two
};