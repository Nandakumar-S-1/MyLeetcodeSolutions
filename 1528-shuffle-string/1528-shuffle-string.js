/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let res=[];
    indices.forEach((index,i)=>res[index]=s[i])
    return res.join('');
};