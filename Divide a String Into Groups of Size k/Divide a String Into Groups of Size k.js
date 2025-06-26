/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {

    let arr = []

    for(let i = 0; i < s.length; i++){

        corte = s
        if(corte.length >= 3){
            arr.push(corte.slice(0,k))
            corte = corte.slice(k,-1)
        } else{
            
        }

    }
    
   
    return arr
    

};

console.log(divideString("abcdefghi",3,"x"))
console.log(divideString("abcdefghij",3,"x"))
// console.log(divideString())