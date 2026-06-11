/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    if (arr.length < 2) return [-1]
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            res[i] = -1
        }
        let val = arr[i]
        let m = -1
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > m) {
                m = arr[j]
            }
        }
        res[i] = m
    }
    return res
};