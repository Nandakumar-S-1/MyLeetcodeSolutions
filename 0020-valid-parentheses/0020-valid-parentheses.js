/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map={
        ')':'(',']':'[','}':'{'
    }
    let stack=[]
    for(let i of s){
        if(i=='(' || i =='[' ||i =='{'){
            stack.push(i)
        }else{
            if(stack.length===0 || stack.pop()!==map[i]){
                return false
            }
        }
    }
    return stack.length===0
};