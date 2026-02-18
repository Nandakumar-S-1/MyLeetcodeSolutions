/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    let s=n.toString()
    let res=''
    for(let i=0;i<s.length;i++){
        if(s[i]!=='0')res+=s[i]
    }
    return Number(res)
};