/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack=[]
    for(let val of s){
        if(/\d/.test(val)){
            stack.pop(val)
        }else{
            stack.push(val)
        }
    }
    return stack.join('')
};