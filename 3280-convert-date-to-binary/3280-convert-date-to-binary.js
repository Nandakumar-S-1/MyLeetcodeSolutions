/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
    return date.split('-').map(digit => parseInt(digit).toString(2)).join('-')
};