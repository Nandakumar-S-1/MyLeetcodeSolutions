/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let sorted = (word) => word.split('').sort().join('')
    let stack=[]
    for(let i of words){
        if(stack.length===0){
            stack.push(i)
        }else{
            if(sorted(i)!==sorted(stack[stack.length-1])){
                stack.push(i)
            }
        }
    }
    return stack
};