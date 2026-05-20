/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    let map = new Map()
    let n = A.length
    let res = []
    let val = 0
    for (let i = 0; i < n; i++) {
        map.set(A[i], (map.get(A[i]) || 0) + 1)
        if(map.get(A[i])===2){
            val++
        }
        map.set(B[i], (map.get(B[i]) || 0) + 1)
        if(map.get(B[i])===2){
            val++
        }
        res.push(val)
    }
    return res
};