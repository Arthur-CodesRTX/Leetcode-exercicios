/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let fraseLimpa = s.trim().replace(/\s+/g, ' ');
    let fraseArr = fraseLimpa.split(" ")
    return fraseArr[fraseArr.length - 1].length
};


console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))