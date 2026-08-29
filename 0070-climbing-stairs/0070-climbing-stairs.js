/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let fst = 1
    let sec = 1
    for (let i = 0; i < n; i++) {
        let temp = fst
        fst = fst + sec
        sec = temp
    }
    return sec
};