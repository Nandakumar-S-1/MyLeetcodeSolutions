/**
 * @param {number} n
 * @return {string}
 */
var concatHex36 = function(n) {
    let square=n*n
    let cube=square*n

    return (square.toString(16)+cube.toString(36)).toUpperCase()
};