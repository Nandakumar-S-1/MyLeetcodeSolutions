/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
    for (let i of grid) {
        i.sort((a, b) => a - b)
    }
    let res = 0
    let col = grid[0].length
    for (let i = col - 1; i >= 0; i--) {
        let max = 0
        for (let j = 0; j < grid.length; j++) {
            max = Math.max(max, grid[j][i])
        }
        res += max
    }
    return res
};