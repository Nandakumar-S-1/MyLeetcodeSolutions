/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function (n, t) {
    for (let i = n; i <= 100; i++) {
        let prod = 1;
        let val = i;
        while (val > 0) {
            let rem = val % 10;
            prod *= rem;
            val = Math.floor(val / 10);
        }
        if (prod % t === 0) {
            return i;
        }
    }
};