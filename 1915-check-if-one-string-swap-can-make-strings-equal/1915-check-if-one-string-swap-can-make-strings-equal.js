/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let res=[]
    for(let i=0;i<s1.length;i++){
        if(s1[i]!==s2[i]){
            res.push([s1[i],s2[i]])
        }
    }
    if(res.length===0)return true
    return res.length===2 && res[0][0] === res[1][1] && res[1][0]===res[0][1]
};