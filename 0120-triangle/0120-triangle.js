/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let res = triangle[triangle.length - 1].slice()
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            res[j] = triangle[i][j] + Math.min(res[j], res[j + 1])
        }
    }
    console.log(res, res[0])
    return res[0]
};