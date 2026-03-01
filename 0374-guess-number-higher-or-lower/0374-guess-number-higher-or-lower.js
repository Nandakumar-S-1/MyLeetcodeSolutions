/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let lower = 1
    let higher = n
    let middle = 0
    while (lower <= higher) {
        middle = Math.floor((lower + higher) / 2)
        let g = guess(middle)
        if (n == g) {
            return g
        }
        if (g == 0) {
            return middle
        } else if (g == 1) {
            lower = middle + 1
        } else {
            higher = middle - 1
        }
    }
};