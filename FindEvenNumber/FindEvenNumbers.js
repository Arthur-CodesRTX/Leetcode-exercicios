/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let evenThreeNumber = new Set(); 

    
    for (let i = 0; i < digits.length; i++) {
        for (let j = 0; j < digits.length; j++) {
            for (let k = 0; k < digits.length; k++) {
                if (i !== j && i !== k && j !== k) {
                    let a = digits[i];
                    let b = digits[j];
                    let c = digits[k];

                    
                    if (a !== 0 && c % 2 === 0) {
                        let number = parseInt(`${a}${b}${c}`); 
                        evenThreeNumber.add(number); 
                    }
                }
            }
        }
    }

    
    return [...evenThreeNumber].sort((x, y) => x - y);
};


console.log(findEvenNumbers([2,1,3,0]))
console.log(findEvenNumbers([2,2,8,8,2]))
console.log(findEvenNumbers([3,7,5]))

// Set deixa apenas os números únicos

// let evenThreeNumber = [];

//     for(let i = 0; i < digits.length; i++){
//         for(let j = 0; j < digits.length; j++){
//             for(let k = 0; k < digits.length; k++){

//                 if(i !== j && i !== k && j !== k){
//                     let a = digits[i]
//                     let b = digits[j]
//                     let c = digits[k]

//                     if(a !== 0 && (c % 2) === 0){
//                     number = parseInt([a,b,c].join(""))
//                     evenThreeNumber.push(number)
//                 }

//                 } 
//             }
//         }
//     };
//     evenThreeNumber.sort((x, y) => x - y);
//     let unicos = [... new Set(evenThreeNumber)]
//     return unicos