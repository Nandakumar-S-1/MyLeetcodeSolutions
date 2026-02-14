/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let res=[]
    let n=grid.length

    for(let i=0;i<n-2;i++){
        let row=[]
        for(let j=0;j<n-2;j++){
            let max =-Infinity
            for(let a=i;a<i+3;a++){
                for(let b=j;b<j+3;b++){
                    max=Math.max(max,grid[a][b])
                }
            }
            row.push(max)
        }
        res.push(row)
    }
    return res
};