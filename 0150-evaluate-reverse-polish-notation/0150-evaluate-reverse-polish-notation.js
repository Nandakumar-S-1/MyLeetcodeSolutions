/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack=[]
    let map={
        '+':(a,b)=>a+b,
        '-':(a,b)=>a-b,
        '/':(a,b)=>(a/b)|0,
        '*':(a,b)=>a*b
    }
    for(let i of tokens){
        if(map[i]){
            // console.log(map,stack)
            let b=stack.pop()
            let a=stack.pop()
            stack.push(map[i](a,b))
            console.log(stack)
        }else{
            stack.push(Number(i))
        }
    }
let res = stack.pop()
return res
};