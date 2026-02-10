/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let count=0
    let res=[]
    let arr=s.split('')
    for(let i=1;i<arr.length;i++){
        let left=arr.slice(0,i)
        let right=arr.slice(i)
        let  z=0
        for(let i=0;i<left.length;i++){
            if(left[i]==='0')z++
        }
        let o=0
        for(let i=0;i<right.length;i++){
            if(right[i]==='1')o++
        }
        res.push(z+o)
    }
    return Math.max(...res)
};