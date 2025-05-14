/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;

    while (i < nums.length) {
        if (nums[i] === val) {
            nums.splice(i, 1); // remove o elemento
            // não incrementa o i, porque o array encolheu e o próximo valor "anda" pra cá
        } else {
            i++; // só avança se não removeu
        }
    }

    return nums.length;
};


// console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))