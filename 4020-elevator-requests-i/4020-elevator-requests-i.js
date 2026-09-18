/**
 * @param {number} n
 * @param {number[]} requests
 * @return {number}
 */
var elevatorRequests = function(n, requests) {
    let res=requests[0]
    for(let i =0;i<requests.length-1;i++){
        res+=Math.abs(requests[i]-requests[i+1])
    }
    return res
};