/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
};

console.log(twoSum([1,3,5],4))
console.log(twoSum([1,3,5],6))
console.log(twoSum([1,3,5,10],13))
console.log(twoSum([1,3,5,11,15],16))