/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    
    let a = nums[0]
    let b = nums[1]
    let c = nums[2]

    if(a + b > c && a + c > b && b + c > a){
        for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i + 1] && nums[i] === nums[i + 2]){
            return "equilateral"
        } else if((nums[i] === nums[i + 1] || nums[i] === nums[i + 2]) || (nums[i + 1] === nums[i] || nums[i + 1] === nums[i + 2])){
            return "isosceles"
        } else if(nums[i] !== nums[i + 1] && nums[i] !== nums[i + 2]){
            return "scalene"
        } 
    }
    }

    return "none"

};


console.log(triangleType([3,3,3]))
console.log(triangleType([3,4,5]))
console.log(triangleType([3,4]))
console.log(triangleType([9,4,9]))
console.log(triangleType([8,4,2]))
console.log(triangleType([2,7,7]))