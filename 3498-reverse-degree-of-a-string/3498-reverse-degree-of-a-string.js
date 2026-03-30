/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let res=0
    let char = 'a'.charCodeAt(0)+26
    for(let i=0;i<s.length;i++){
        res+= (char - s.charCodeAt(i)) *(i+1)
    }
    return res
};