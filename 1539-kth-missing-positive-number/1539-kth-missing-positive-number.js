/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let res = []
    let count = 0
    let val = 0
    let max = arr[arr.length - 1]
    for (let i = 1; i <= max + k; i++) {
        res.push(i)
    }
    for (let i = 0; i < res.length; i++) {
        if (!arr.includes(res[i])) {
            count++
            if (count === k) {
                val = res[i]
            }
        }
    }
    return val
};