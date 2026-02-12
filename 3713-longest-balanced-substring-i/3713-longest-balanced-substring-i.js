/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
    let res=0
    let n=s.length
    if(s.length==1)return 1

    for(let i=0;i<n-1;i++){
        let map= new Map()
        for(let j=i;j<n;j++){
            let char = s.charAt(j)
            let val=(map.get(char)||0)+1
            map.set(char,val)

            let set=new Set(map.values())
            if(set.size===1){
                res=Math.max(res,j-i+1)
            }
        }
    }
    return res
};