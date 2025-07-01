/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    
    let contador = 0, n = word.length;

    for(let i = 0; i <= n; i++){
        word[i] === word[i + 1] ? contador++ : null
    }

    return contador
};

console.log(possibleStringCount("abbcccc"))