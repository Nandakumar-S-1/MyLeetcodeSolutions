/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function (n) {
    let ec = 0
    let oc = 0
    let esum = 0
    let osum = 0
    let i = 1
    while (ec < n || oc < n) {
        if (i % 2 === 0) {
            ec++
            esum += i
        } else {
            oc++
            osum += i
        }
        i++
    }
    let res = 1
    for (let i = 0; i < Math.max(esum, osum); i++) {
        if (esum % i === 0 && osum % i === 0) {
            res = i
        }
    }
    return res
};