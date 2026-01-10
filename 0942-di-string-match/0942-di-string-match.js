/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let I = 0
    let D = s.length
    let res=[]
        
    for(let i=0;i<s.length;i++){
        if(s[i]==='I'){
            res.push(I)
            I++
        }
        if(s[i]==='D'){
            res.push(D)
            D--
        }
    }
    res.push(I)
    return res
};