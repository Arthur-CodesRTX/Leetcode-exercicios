/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    const romanMap = {
        I: 1, V: 5, X: 10,
        L: 50, C: 100, D: 500, M: 1000
      };

    let total = 0;
    
    for(let i = 0; i < s.length; i++){

        let atual = romanMap[s[i]]
        let proximo = romanMap[s[i + 1]]

        if(proximo > atual){
            total += proximo - atual;
            i++;
        } else{
            total += atual
        }
        
    }

    return total

};


console.log(romanToInt("III")) // 3
console.log(romanToInt("XVI")) // 16
console.log(romanToInt("LVIII")) // 58
console.log(romanToInt("MCMXCIV")) // 1994
console.log(romanToInt("IV"))

