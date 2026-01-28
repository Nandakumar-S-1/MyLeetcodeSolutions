/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(c) {
    return (c.charCodeAt(0)+c.charCodeAt(1))%2
};