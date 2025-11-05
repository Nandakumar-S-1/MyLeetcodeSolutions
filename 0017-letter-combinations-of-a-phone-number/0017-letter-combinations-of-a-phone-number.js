/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let res=[]
    let map={
        2:'abc',3:'def',4:'ghi',5:'jkl',6:'mno',7:'pqrs',8:'tuv',9:'wxyz'
    }
    function Get(i,rest){
        
        if(i===digits.length){
            res.push(rest)
            return
        }

        for(let val of map[digits[i]]){
            Get(i+1,rest+val)    
        }
    }
    Get(0,'')
    return res
};