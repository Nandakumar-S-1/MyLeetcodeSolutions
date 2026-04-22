/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dictionary) {
    let res=[]
    for(let q of queries){
        for(let w of dictionary){
            count=0
            for(let i=0;i<w.length;i++){
                if(q[i]!==w[i]){
                    count++
                }
                if(count>3){
                    break
                }
            }
            if(count<=2){
                res.push(q)
                break
            }
        }
    }
    return res
};