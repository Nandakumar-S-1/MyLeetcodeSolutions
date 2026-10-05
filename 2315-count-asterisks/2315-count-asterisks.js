/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let star=0
    let sl=false
    for(let i=0;i<s.length;i++){
        if(s[i]==='|'){
            sl=!sl
        }else if(!sl && s[i]==='*'){
            star++
        }
    }
    return star
};