/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {

    let arrConfirm = []
    for(let i = 0; i < words.length; i++){
        words[i].includes(x) == true ? arrConfirm.push(i) : null
    }
    return arrConfirm
};


console.log(findWordsContaining(["leet","code"], "e"))
console.log(findWordsContaining(["abc","bcd","aaaa","cbc"], "a"))