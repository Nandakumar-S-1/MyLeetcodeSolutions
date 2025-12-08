/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let count=0
    let set = new Set()
    for(let i=1;i<=n;i++){
        set.add(i*i)
    }
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            let sq=(i*i)+(j*j)
            if(set.has(sq)){
                count++
            }
        }
    }
    return count
};