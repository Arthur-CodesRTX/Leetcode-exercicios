/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    
    let total = 0;
    let procurar = new Set(nums);
    let arr = [...procurar]

    for(let i = 0; i < arr.length; i++){
       if(arr[i] >= 0){
         total += arr[i]
       } 
    }

   if (total === 0) {
        let maisProximo = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (Math.abs(arr[i]) < Math.abs(maisProximo)) {
                maisProximo = arr[i];
            }
            
            else if (Math.abs(arr[i]) === Math.abs(maisProximo) && arr[i] > maisProximo) {
                maisProximo = arr[i];
            }
        }

        return maisProximo;
    }

    return total;

};

console.log(maxSum([1,2,3,4,5]))
console.log(maxSum([1,1,0,1,1]))
console.log(maxSum([1,2,-1,-2,1,0,-1]))
console.log(maxSum([-100]))