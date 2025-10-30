/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    let res = []

    let isPos = m * n === original.length
    for (let i = 0; i < m; i++) {
        if (!isPos) {
            return []
        } else {
            let inner = []
            for (let j = 0; j < n; j++) {
                inner.push(original[i * n + j])
            }
            res.push(inner)
        }
    }
    return res
};