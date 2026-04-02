/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let isNeg = x < 0 ? -1 : 1
    let rev = Math.abs(x).toString().split('').reverse().join('')

    rev = Number(rev) * isNeg
    console.log(rev)
    if (rev <= -2147483647 || rev >= 2147483647) {
        return 0
    }
    return rev
};