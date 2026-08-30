/**
 * @param {number} n
 * @param {number} s
 * @return {number}
 */
var largestInteger = function(n, s) {
    if(s==0)return 0
    if(s > n*9){
        return -1
    }
    let res=''
    for(let i=0;i<n;i++){
        let digit=Math.min(9,s)
        res+=digit.toString()
        s-=digit
    }
    return Number(res)
};