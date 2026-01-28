/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(c) {
    let map = {
        'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'g':7,'h':8
    }
    let x = Number(c[1])
    let y= map[c[0]]
    return (x+y)%2!==0 ? true : false
};