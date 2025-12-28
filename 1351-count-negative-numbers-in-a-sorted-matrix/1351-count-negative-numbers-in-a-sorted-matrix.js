/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    return grid.flat().filter(i=>i<0).length;
};