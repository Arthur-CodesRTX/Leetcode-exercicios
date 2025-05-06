/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let stringVar = x.toString()
    let arrayVar = stringVar.split("")
    
    return arrayVar.join("") === arrayVar.reverse().join("")

};

console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(10)) // false
console.log(isPalindrome(1000021)) // false
console.log(isPalindrome(1000110001)) // true
console.log(isPalindrome(0)) // true
console.log(isPalindrome(10022201)) // false