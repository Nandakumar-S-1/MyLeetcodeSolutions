/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
        let alphabet = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9}
        function finding(str){
                let val=0
            for(let i of str){
                val=val*10 +alphabet[i]
            }
            return val
        }
        return finding(firstWord)+finding(secondWord)===finding(targetWord)
};