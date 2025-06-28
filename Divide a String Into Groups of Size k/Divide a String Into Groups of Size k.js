/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {

    let arr = [];
    for(let i = 0; i < s.length; i += k){

        if(s.slice(i, i + k).length >= k){
            arr.push(s.slice(i, i + k));
        } else{
            let letraX = s.slice(i, i + k).padEnd(k,fill)
            arr.push(letraX);
        }
        
    }
    
    return arr 
};

console.log(divideString("abcdefghi",3,"x"))
console.log(divideString("abcdefghij",3,"x"))
