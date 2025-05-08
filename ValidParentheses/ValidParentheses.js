/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let arr = []

    let map = {
        "(":")",
        "{":"}",
        "[":"]"
    }

    for(let char of s){

        if(map[char]){
            arr.push(map[char])
        } else if(arr.pop() !== char){
            return false
        }

    }

    return arr.length === 0

};

console.log(isValid("()")) // true
console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) // false
console.log(isValid("([])")) // true
console.log(isValid("([)")) // false
console.log(isValid("[]")) // true
console.log(isValid("([)]")) // false
console.log(isValid("[")) // false
console.log(isValid("({{{{}}}))")) // false

