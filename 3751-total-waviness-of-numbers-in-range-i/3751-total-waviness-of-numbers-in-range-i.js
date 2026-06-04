/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function (num1, num2) {
    let count = 0
    for (let v = num1; v <= num2; v++) {
        let a = String(v).split('')
        for (let i = 1; i < a.length - 1; i++) {
            if (a.length > 2) {
                if (a[i] < a[i - 1] && a[i] < a[i + 1]) {
                    count++
                }
            }
        }
        for (let i = 1; i < a.length - 1; i++) {
            if (a.length > 2) {
                if (a[i] > a[i - 1] && a[i] > a[i + 1]) {
                    count++
                }
            }
        }
    }
    return count
};