/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let nextArr = nums;
    [...nums].forEach( arr => nextArr.push(arr))
    return nextArr
};

console.log(getConcatenation([1,2,1]))