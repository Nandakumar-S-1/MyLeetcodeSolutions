/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
    const n = matrix.length
    for (let i = 0; i < n; i++) {
        const row = new Set()
        const col = new Set()
        for (let j = 0; j < n; j++) {
            const r = matrix[i][j]
            const c = matrix[j][i]
            if (row.has(r)) return false
            if (col.has(c)) return false

            row.add(r)
            col.add(c)
        }
    }
    return true
};