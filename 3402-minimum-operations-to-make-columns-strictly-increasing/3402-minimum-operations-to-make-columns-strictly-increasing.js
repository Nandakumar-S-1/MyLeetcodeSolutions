/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function(grid) {
    let count=0
    for(let i=1;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]<=grid[i-1][j]){
                let updated = grid[i-1][j]+1
                count+=updated-grid[i][j]
                grid[i][j]=updated
            }
        }
    }
    return count
};