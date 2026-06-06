/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let n = nums.length
    let l = []
    let r = []
    let i = 0
    let res = []
    while (i < n) {
        if (i === 0) {
            l[i] = 0
        } else {
            l[i] = nums.reduce((a, c, ind) => {
                if (ind < i) {
                    return a + c
                }
                return a
            }, 0)
        }
        if (i === n-1) {
            r[i] = 0
        } else {
            r[i] = nums.reduce((a, c, ind) => {
                if (ind > i) {
                    return a + c
                }
                return a
            }, 0)
        }
        res[i]=Math.abs(l[i]-r[i])
        i++
    }
    return res
};