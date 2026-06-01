/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, a) {
    a.sort((a,b)=>a-b)
    let m=mass
    for(let i=0;i<a.length;i++){
        if(a[i]<=m){
            m+=a[i]
        }else{
           return false
        }
    }
    return true
};