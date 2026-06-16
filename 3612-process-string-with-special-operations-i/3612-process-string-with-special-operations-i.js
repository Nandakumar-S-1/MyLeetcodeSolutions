/**
 * @param {string} s
 * @return {string}
 */
var processStr = function(s) {
    let res=''
    let i=0
    while(i<s.length){
        if(s[i]!=='#' && s[i]!=='*' && s[i]!=='%'){
            res+=s[i]
        }else if(s[i]==='#'){
            res+=res
        }else if(s[i]==='*'){
            res= res.slice(0,-1)
        }else{
           res = res.split('').reverse().join('')
        } 
        i++
    }
    return res
};