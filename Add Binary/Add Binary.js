/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    const numA = parseInt(a, 2);
    const numB = parseInt(b, 2);
    let sum = numA + numB
    
    return sum.toString(2)
};

console.log(addBinary("11", "1"))
console.log(addBinary("1010", "1011"))

// // A base é o sistema numérico:

// 10 → decimal

// 2 → binário

// 16 → hexadecimal

// e assim por diante.

