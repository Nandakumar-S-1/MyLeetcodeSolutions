/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word===word.toUpperCase()||word===word.toLowerCase())return true;
    else if(word[0]===word[0].toUpperCase() && word.slice(1)===word.slice(1).toLowerCase())return true;
    else return false;
};