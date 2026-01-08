/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let res = []
    for (let i = left; i <= right; i++) {
        let arr = i.toString().split('')
        let isTrue = true
        for (let j of arr) {
            if (Number(j) === 0 || i % Number(j) !== 0) {
                isTrue = false
                break
            }
        }
        if (isTrue) {
            res.push(i)
        }
    }
    return res
};