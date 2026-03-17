/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function (s) {
    let map = {}
    for(let i of s) {
        map[i]=(map[i]||0)+1
    }
    let res=[]
    for(let i in map){
        res.push(i)
    }
    return res.length
};