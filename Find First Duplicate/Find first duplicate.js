/* Dado um array de inteiros nums, encontre o primeiro número duplicado para o qual o segundo índice de ocorrência seja o menor possível.
Retorne esse número. Se nenhum número se repetir, retorne -1.*/

function FindFirstDuplicate(nums){

    let arr = [];

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                arr.push(j)
            } 
        }
    }

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(arr[i] < arr[j]){
                return nums[arr[i]]
            } else if(arr[j] < arr[i]){
                return nums[arr[j]]
            }
        }
    }

   return -1

}

console.log(FindFirstDuplicate([2, 1, 3, 5, 3, 2]))

// CORREÇÃO

function FindFirstDuplicate(nums) {
    let seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) {
            return num;
        }
        seen.add(num);
    }

    return -1;
}