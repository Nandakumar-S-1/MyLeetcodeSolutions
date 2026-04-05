/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    if(n<1000)return 0
    let c=0
    for(let i=1000;i<=n;i++){
        c++
    }
    return c
};