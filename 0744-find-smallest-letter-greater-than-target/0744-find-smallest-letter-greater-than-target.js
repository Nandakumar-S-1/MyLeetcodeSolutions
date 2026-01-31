/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    for(let i of letters){
        if(target<i){
            return i
        }
    }
    return letters[0]
};