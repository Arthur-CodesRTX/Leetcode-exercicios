/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    let string_1 = s.split("");
    let string_2 = t.split("");
    string_1.sort();
    string_2.sort();
    return (string_1.join("") == string_2.join("")) ? true : false

};

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("a","ab"))
console.log(isAnagram("ab","a"))
console.log(isAnagram("aa","a"))
console.log(isAnagram("aa","aa"))
console.log(isAnagram("aacc","ccac"))